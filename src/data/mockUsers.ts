import { User, Institute } from '../types/auth';

export const mockInstitutes: Institute[] = [
  {
    id: '1',
    name: 'Global Academy',
    location: 'New York',
    studentCount: 1200,
    teacherCount: 45,
    status: 'active'
  },
  {
    id: '2',
    name: 'Tech Institute',
    location: 'San Francisco',
    studentCount: 850,
    teacherCount: 32,
    status: 'active'
  },
  {
    id: '3',
    name: 'Learning Center',
    location: 'Chicago',
    studentCount: 650,
    teacherCount: 28,
    status: 'active'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Super Admin',
    email: 'super@digisir.com',
    role: 'SUPER_ADMIN'
  },
  {
    id: '2',
    name: 'Institute Admin',
    email: 'admin@institute.com',
    role: 'ADMIN',
    instituteId: '1'
  },
  {
    id: '3',
    name: 'John Teacher',
    email: 'teacher@institute.com',
    role: 'TEACHER',
    instituteId: '1'
  },
  {
    id: '4',
    name: 'Steve Student',
    email: 'student@institute.com',
    role: 'STUDENT',
    instituteId: '1'
  },
  {
    id: '5',
    name: 'Parent User',
    email: 'parent@example.com',
    role: 'PARENT',
    instituteId: '1'
  }
];