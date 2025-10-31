export const ALL_PROJECTS = ["concaly", "mudboard", "pct", "jonadrew"] as const;
export type ProjectType = (typeof ALL_PROJECTS)[number];

// export type ProjectType = "concaly" | "mudboard" | "pct" | "jonadrew";
export const projectStyles: Record<
  string,
  {
    header: string;
    subtitle: string;
    link: string;
    link_cta: string;
    link_accessible_cta: string;
    photos_link?: string;
    logo_src?: string;
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
      icon: string;
    };
  }
> = {
  concaly: {
    header: "ConCaly",
    subtitle: "I created a Comic Con directory for Artists to find work",
    link: "https://www.concaly.app",
    link_cta: "Visit Concaly",
    link_accessible_cta: "Visit Concaly Live Website",
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
      icon: "text-concaly-secondary",
    },
  },
  mudboard: {
    header: "Mudboard",
    subtitle: "I built a business to help Artists resurface their inspiration",
    link: "https://www.mudboard.com/",
    link_cta: "Visit Mudboard",
    link_accessible_cta: "Visit Mudboard Live Website",
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
      icon: "text-mudboard-accent",
    },
  },
  pct: {
    header: "Pacific Crest Trail",
    subtitle: "I walked across the US in 4 months using gear I made myself",
    link: "https://docs.google.com/spreadsheets/d/1vvdS_cpu703A6ODHuChUXefpH1-JA6VGIaMkT5ZDjHY/edit?gid=0#gid=0",
    link_cta: "View Hiker Log",
    link_accessible_cta: "View PCT Hiker Log Spreadsheet",
    photos_link:
      "https://www.flickr.com/photos/198687848@N05/albums/72177720320026879",
    fonts: {
      logo: "font-pct-logo",
      header: "font-pct-header",
      body: "font-pct-body",
    },
    fontNames: {
      logo: "Kaushan",
      header: "Barlow",
      body: "Crimson",
    },
    fontSizes: {
      logo: "text-[1.04rem]",
      header: "text-[.96rem] font-semibold",
      body: "text-[1.08rem] font-medium",
    },
    colors: {
      primary: "bg-pct-primary",
      accent: "bg-pct-secondary",
      secondary: "bg-pct-accent",
      text: "text-pct-text",
      background: "bg-pct-primary",
      hover: "hover:text-pct-accent",
      selected: "bg-pct-secondary",
      border: "border-pct-secondary",
      icon: "text-pct-accent",
    },
  },
  jonadrew: {
    header: "Jonadrew",
    subtitle: "I left my coorporate software job to become an illustrator",
    link_cta: "Visit Portfolio",
    link_accessible_cta: "Visit Jonadrew Portfolio",
    link: "https://www.jonadrew.com/",
    fonts: {
      logo: "font-jonadrew-logo",
      header: "font-jonadrew-header",
      body: "font-jonadrew-body",
    },
    fontNames: {
      logo: "Caveat",
      header: "Quicksand",
      body: "Maven",
    },
    fontSizes: {
      logo: "text-[1.1rem]",
      header: "text-[.94rem] font-semibold",
      body: "text-[.99rem] font-medium",
    },
    colors: {
      primary: "bg-jonadrew-primary",
      accent: "bg-jonadrew-accent",
      secondary: "bg-jonadrew-secondary",
      text: "text-jonadrew-text",
      background: "bg-jonadrew-primary",
      hover: "hover:text-jonadrew-accent",
      selected: "bg-jonadrew-accent",
      border: "border-jonadrew-accent",
      icon: "text-jonadrew-secondary",
    },
  },
};
