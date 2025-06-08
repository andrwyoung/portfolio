import { projectStyles } from "@/types/project-styles";

export function DesignSpec({ activeProject }: { activeProject: string }) {
  const style = projectStyles[activeProject];

  if (!style) return null;

  const { fonts, fontNames, fontSizes, colors } = style;

  return (
    <div
      className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm 
    w-40 p-4 rounded-lg shadow text-sm space-y-3"
    >
      <div>
        {/* <h3 className="font-semibold font-header mb-1">Fonts:</h3> */}
        <ul className="space-y-1 font-header text-xs ">
          <li>
            header{" "}
            <span className={`${fonts.header} ${fontSizes.header} ml-1`}>
              {fontNames.header}
            </span>
          </li>
          <li>
            body{" "}
            <span className={`${fonts.body} ${fontSizes.body} ml-1`}>
              {fontNames.body}
            </span>
          </li>
          <li>
            logo{" "}
            <span className={`${fonts.logo} ${fontSizes.logo} ml-1`}>
              {fontNames.logo}
            </span>
          </li>
        </ul>
      </div>
      <div>
        {/* <p className="font-semibold mb-1 font-header">Colors:</p> */}
        <div className="flex flex-col gap-2">
          {Object.entries(colors)
            .filter(([label]) =>
              ["primary", "secondary", "accent"].includes(label)
            )
            .map(([label, className]) => (
              <div key={label} className="flex gap-2 items-center">
                <div className={`w-6 h-4 rounded-full border ${className}`} />
                <span className="font-header text-xs">{label}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
