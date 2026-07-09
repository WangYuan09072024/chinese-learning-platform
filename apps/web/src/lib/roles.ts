// Mirrors 02_Information_Architecture/Permission_Matrix.md role list.
const STAFF_ROLES = [
  'CONTENT_MANAGER',
  'FINANCE_STAFF',
  'CUSTOMER_SUPPORT',
  'ADMIN',
  'SUPER_ADMIN',
];

export function roleHomePath(roles: string[]): string {
  if (roles.some((r) => STAFF_ROLES.includes(r))) return '/admin/dashboard';
  if (roles.includes('TEACHER') || roles.includes('TEACHING_ASSISTANT')) return '/teacher/dashboard';
  return '/student/dashboard';
}

// Mirrors the backend's STAFF_ROLES (apps/api): who can build curriculum
// (courses/chapters/lessons/quizzes) and assign teachers to courses.
const CONTENT_STAFF_ROLES = ['ADMIN', 'SUPER_ADMIN', 'CONTENT_MANAGER'];

export function isContentStaff(roles: string[]): boolean {
  return roles.some((r) => CONTENT_STAFF_ROLES.includes(r));
}
