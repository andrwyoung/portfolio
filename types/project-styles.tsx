export type ProjectType = "concaly" | "mudboard" | "inquiryon";
export const projectStyles: Record<
  string,
  {
    header: string;
    link: string;
    logo_src: string;
    fonts: {
      logo: string;
      header: string;
      body: string;
    };
    fontNames: {
      logo: string;
      header: string;
      body: string;
    };
    fontSizes: {
      logo: string;
      header: string;
      body: string;
    };
    colors: {
      primary: string;
      accent: string;
      secondary: string;
      text: string;
      background: string;
      hover: string;
      selected: string;
      border: string;
    };
  }
> = {
  concaly: {
    header: "ConCaly",
    link: "https://www.concaly.app",
    logo_src: "/concaly-logo.png",
    fonts: {
      logo: "font-concaly-logo",
      header: "font-concaly-header",
      body: "font-concaly-body",
    },
    fontNames: {
      logo: "Pattaya",
      header: "Raleway",
      body: "Mulish",
    },
    fontSizes: {
      logo: "text-[1.06rem]",
      header: "text-[.95rem] font-semibold",
      body: "text-[1.00rem] font-medium",
    },
    colors: {
      primary: "bg-concaly-primary",
      accent: "bg-concaly-secondary",
      secondary: "bg-concaly-primary-light",
      text: "text-concaly-primary-text",
      background: "bg-concaly-primary-lightest",
      hover: "hover:text-concaly-secondary",
      selected: "bg-concaly-secondary-lightest border-concaly-secondary",
      border: "border-concaly-secondary",
    },
  },
  mudboard: {
    header: "Mudboard",
    link: "https://www.mudboard.com/",
    logo_src: "/mudboard-logo.png",
    fonts: {
      logo: "font-mudboard-logo",
      header: "font-mudboard-header",
      body: "font-mudboard-body",
    },

    fontNames: {
      logo: "Sweety Rasty",
      header: "Recursive",
      body: "Gantari",
    },
    fontSizes: {
      logo: "text-[1.01rem]",
      header: "text-[.97rem] font-semibold",
      body: "text-[1.03rem] font-medium",
    },
    colors: {
      primary: "bg-mudboard-primary",
      accent: "bg-mudboard-accent",
      secondary: "bg-mudboard-secondary-lighter",
      text: "text-mudboard-primary-text",
      background: "bg-mudboard-primary",
      hover: "hover:text-mudboard-accent",
      selected: "bg-mudboard-accent",
      border: "border-mudboard-accent",
    },
  },
  inquiryon: {
    header: "Inquiryon",
    link: "https://www.inquiryon.com/",
    logo_src: "/inquiryon-logo.png",
    fonts: {
      logo: "font-inquiryon-logo",
      header: "font-inquiryon-header",
      body: "font-inquiryon-body",
    },
    fontNames: {
      logo: "Rajdhani",
      header: "Chivo",
      body: "Mulish",
    },
    fontSizes: {
      logo: "text-[1.05rem]",
      header: "text-[1rem] font-medium",
      body: "text-[1.00rem] font-medium",
    },
    colors: {
      primary: "bg-inquiryon-primary",
      accent: "bg-inquiryon-accent",
      secondary: "bg-inquiryon-secondary",
      text: "text-inquiryon-primary-foreground",
      background: "bg-inquiryon-primary",
      hover: "hover:text-inquiryon-accent",
      selected: "bg-inquiryon-accent border-inquiryon-accent",
      border: "border-inquiryon-accent",
    },
  },
};
