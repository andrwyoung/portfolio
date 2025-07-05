import { projectStyles } from "@/types/project-styles";

export function DesignSpec({ activeProject }: { activeProject: string }) {
  const style = projectStyles[activeProject];

  if (!style) return null;

  const { fonts, fontNames, fontSizes, colors } = style;

  return (
    <div
      className="fixed bottom-4 right-4 bg-white/20 backdrop-blur-sm 
    gap-4 px-4 py-2 rounded-lg shadow text-sm flex flex-row justify-between 
    h-22"
    >
      <div className="flex flex-col justify-between font-header text-xs">
        {(["header", "body", "logo"] as const).map((type) => (
          <div key={type} className="flex items-baseline gap-2">
            <span>{type}</span>
            <span className={`${fonts[type]} ${fontSizes[type]}`}>
              {fontNames[type]}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between h-full py-1">
        {Object.entries(colors)
          .filter(([label]) =>
            ["primary", "secondary", "accent"].includes(label)
          )
          .map(([label, className]) => (
            <div key={label} className="flex gap-2 items-center">
              <div className={`w-6 h-3.5 rounded-full border ${className}`} />
              <span className="font-header text-xs">{label}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
