import { Course } from '../types';

interface InstrumentCardProps {
  course: Course;
}

export default function InstrumentCard({ course }: InstrumentCardProps) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{course.title}</h2>
      <p className="mb-2"><strong>Duration:</strong> {course.duration}</p>
      <p className="mb-2"><strong>Type:</strong> {course.type}</p>
      <p>{course.description}</p>
    </div>
  );
}