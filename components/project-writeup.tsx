type Screenshot = { src: string; alt: string };

type ProjectWriteupProps = {
  name: string;
  what: React.ReactNode;
  why: React.ReactNode;
  writeup: React.ReactNode;
  screenshots?: Screenshot[];
  className?: string;
};

export function ProjectWriteup({
  name,
  what,
  why,
  writeup,
  screenshots = [],
  className = "",
}: ProjectWriteupProps) {
  return (
    <div className={`space-y-6 max-w-xl ${className}`}>
      <section>
        <h2 className="text-2xl font-bold mb-1">What is {name}?</h2>
        <div>{what}</div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-1">Why does it exist?</h2>
        <div>{why}</div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-1">Write-up</h2>
        <div>{writeup}</div>
      </section>

      {screenshots.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-1">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {screenshots.map((shot, i) => (
              <img
                key={i}
                src={shot.src}
                alt={shot.alt}
                className="rounded-lg shadow sm:col-span-1"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
