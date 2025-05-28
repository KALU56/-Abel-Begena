import Head from 'next/head';
import Image from 'next/image';

export default function Instruments() {
  return (
    <>
      <Head>
        <title>Our Instruments - Abel Begena</title>
        <meta name="description" content="Discover our handcrafted begena and kirar instruments." />
      </Head>
      <div className="py-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Instruments</h1>
        <p className="mb-8 text-center">
          We craft authentic begena and kirar instruments, preserving Ethiopia’s musical traditions.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/begena.jpg"
              alt="Begena"
              width={500}
              height={300}
              className="rounded mb-4"
            />
            <h2 className="text-xl font-bold">Begena</h2>
            <p>
              The begena, a 10-stringed lyre, is a sacred instrument used for spiritual meditation
              in the Ethiopian Orthodox Church.
            </p>
          </div>
          <div>
            <Image
              src="/kirar.jpg"
              alt="Kirar"
              width={500}
              height={300}
              className="rounded mb-4"
            />
            <h2 className="text-xl font-bold">Kirar</h2>
            <p>
              The kirar, with 5 or 6 strings, is a versatile instrument for cultural and religious performances.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}