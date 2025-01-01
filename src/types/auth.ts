export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT';

export interface Institute {
  id: string;
  name: string;
  location: string;
  studentCount: number;
  teacherCount: number;
  status: 'active' | 'inactive';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  instituteId?: string;
}