import Head from 'next/head';
import InstrumentCard from '../../components/InstrumentCard';
import courses from '../../data/courses.json';
import { Course } from '../../types';

export default function Training() {
  return (
    <>
      <Head>
        <title>Training Programs - Abel Begena</title>
        <meta name="description" content="Explore our 10-month training programs for begena, kirar, and more." />
      </Head>
      <div className="py-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Training Programs</h1>
        <p className="mb-8 text-center">
          Join our 10-month courses to master traditional Ethiopian instruments with 70% practical training.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course: Course) => (
            <InstrumentCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}