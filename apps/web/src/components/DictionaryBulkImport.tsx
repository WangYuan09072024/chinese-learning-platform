'use client';

import { useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import { FileSpreadsheet, Download, Upload } from 'lucide-react';
import { bulkImport, type BulkEntry } from '@/actions/dictionary';

// Header aliases (lowercased) → our field. Lets admins use Vietnamese or English headers.
const ALIASES: Record<string, keyof BulkEntry> = {};
const addAliases = (field: keyof BulkEntry, names: string[]) => names.forEach((n) => (ALIASES[n] = field));
addAliases('hanzi', ['hanzi', 'chữ hán', 'chu han', 'hán tự', 'han tu', 'từ', 'tu', 'word', '汉字', '漢字']);
addAliases('pinyin', ['pinyin', 'pin yin', 'phiên âm', 'phien am', 'âm', 'am']);
addAliases('meaning', ['meaning', 'nghĩa', 'nghia', 'nghĩa tiếng việt', 'định nghĩa', 'vietnamese', 'ý nghĩa']);
addAliases('hskLevel', ['hsk', 'hsklevel', 'hsk level', 'cấp độ', 'cap do', 'level', 'cấp']);

function mapRow(row: Record<string, unknown>): BulkEntry {
  const out: BulkEntry = { hanzi: '', pinyin: '', meaning: '' };
  for (const [rawKey, val] of Object.entries(row)) {
    const field = ALIASES[String(rawKey).trim().toLowerCase()];
    if (field && val != null) out[field] = String(val).trim();
  }
  return out;
}

const CHUNK = 500;

export function DictionaryBulkImport({ onDone }: { onDone: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  function downloadTemplate() {
    const rows = [
      ['hanzi', 'pinyin', 'meaning', 'hsk'],
      ['你好', 'nǐ hǎo', 'xin chào', 'HSK1'],
      ['谢谢', 'xièxie', 'cảm ơn', 'HSK1'],
      ['朋友', 'péngyou', 'bạn bè', 'HSK1'],
    ];
    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!cols'] = [{ wch: 10 }, { wch: 14 }, { wch: 30 }, { wch: 8 }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'TuDien');
    XLSX.writeFile(wb, 'mau-tu-dien-yuanyuan.xlsx');
  }

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setMsg(null);
    setErr(null);
    try {
      const buf = await file.arrayBuffer();
      const wb = XLSX.read(buf);
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(ws, { defval: '' });
      const entries = rows.map(mapRow).filter((r) => r.hanzi && r.pinyin && r.meaning);

      if (entries.length === 0) {
        setErr('Không đọc được dòng nào hợp lệ. Kiểm tra file có cột hanzi, pinyin, meaning chưa.');
        return;
      }

      let inserted = 0;
      let skipped = 0;
      for (let i = 0; i < entries.length; i += CHUNK) {
        const res = await bulkImport(entries.slice(i, i + CHUNK));
        if ('error' in res) {
          setErr(res.error);
          return;
        }
        inserted += res.inserted;
        skipped += res.skipped;
      }
      setMsg(`Đã nhập ${inserted} từ mới${skipped > 0 ? `, bỏ qua ${skipped} từ trùng` : ''}. 🎉`);
      onDone();
    } catch {
      setErr('File không hợp lệ. Vui lòng dùng file Excel (.xlsx) hoặc CSV theo mẫu.');
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  return (
    <div className="card flex flex-col gap-3 border-brand-200 p-4 text-sm dark:border-white/10">
      <h2 className="flex items-center gap-2 font-bold">
        <FileSpreadsheet className="h-5 w-5 text-mint-600" /> Nhập hàng loạt từ Excel
      </h2>
      <p className="text-xs text-zinc-500">
        Tải file mẫu, điền các cột <b>hanzi · pinyin · meaning · hsk</b>, rồi upload — hệ thống tự thêm vào từ điển (bỏ qua từ đã có).
      </p>
      <div className="flex flex-wrap gap-2">
        <button onClick={downloadTemplate} className="btn-ghost w-fit">
          <Download className="h-4 w-4" /> Tải file mẫu
        </button>
        <button onClick={() => inputRef.current?.click()} disabled={busy} className="btn-primary w-fit">
          <Upload className="h-4 w-4" /> {busy ? 'Đang nhập...' : 'Chọn file Excel'}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={onFile}
          className="hidden"
        />
      </div>
      {msg && <p className="text-mint-600">{msg}</p>}
      {err && <p className="text-brand-600">{err}</p>}
    </div>
  );
}
