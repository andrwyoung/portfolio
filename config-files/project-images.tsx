import type { ProjectType } from "./project-styles";

export type ImageType = {
  src: string;
  alt: string;
  height: number;
  width: number;
  blurhash: string;
};

export const projectImages: Record<
  ProjectType,
  {
    header_image: ImageType;
    screenshots?: ImageType[];
  }
> = {
  concaly: {
    header_image: {
      src: "/concaly/header.png",
      alt: "Concaly Header",
      width: 1724,
      height: 969,
      blurhash:
        "f6Rfd].A4.~p?wrp00t6oIR+IU%L00rq-pWrxVIq00xWtRt6V@oz00n$xaV@Rjoe",
    },
    screenshots: [
      {
        src: "/concaly/3.png",
        alt: "Calendar view",
        width: 1724,
        height: 969,
        blurhash:
          "f9S6Sq}vlBNY=gBP00$*k8kBxHNZ4VFqv}xHFY+}00JOxbxbJP$l00$+bXbaxGNZ",
      },
      {
        src: "/concaly/2.png",
        alt: "Selected Con",
        width: 1724,
        height: 969,
        blurhash:
          "f5RypWyG==bxofr:00-;xuIURin$00-ONMMws:x^00Mbo#^*%MNH00o$Vr-;ayIU",
      },
      {
        src: "/concaly/5.png",
        alt: "Edit Artist Alley Panel",
        width: 1724,
        height: 969,
        blurhash:
          "fMKx9%a~00oc~qawM{kBj?jaa#ay0KoJ?ba#D%j]M{jYj[kCj=kC9ZkC%MayM|f6",
      },
      {
        src: "/concaly/4.png",
        alt: "Edit Convention Info Panel",
        width: 1724,
        height: 969,
        blurhash:
          "fRKBXbay00of~pfPRjj@ayjsayay9ZkC%MjuM{ayRjfkfPj[j[j[D%j?%LjsNGay",
      },
      {
        src: "/concaly/6.png",
        alt: "Suggestions/Updates page",
        width: 1916,
        height: 969,
        blurhash:
          "f7SPR#oj?t%C.Ar;00s=tPt3kWoe00$_R8V~aIg400xTV^kFr;bw00t8x@t5bJWA",
      },
    ],
  },

  mudboard: {
    header_image: {
      src: "/mudboard/header.png",
      alt: "Mudboard Header",
      width: 1663,
      height: 965,
      blurhash:
        "fUMjw69F9GIAM{RPMxxvWAWUt6W.?^RiRjV@RPxa-;MxoLkCWURj-;WAWUa#bIRk",
    },
    screenshots: [
      {
        src: "/mudboard/0.png",
        alt: "Gallery View",
        width: 1665,
        height: 965,
        blurhash:
          "fOKB2UIWIAIURhM_?wNHi^RORiax-;WAR,f5nin%~pMxIUogR,a#?bj=NGWBjvj]",
      },
      {
        src: "/mudboard/2.png",
        alt: "Overlay Gallery View",
        width: 1665,
        height: 965,
        blurhash:
          "fJHo2gMe00?HRQ~p%2RjRjt7WBj[M{t7t7WVxtRjj]ayRjj[ayWBIUt7%LayofWB",
      },
      {
        src: "/mudboard/3.png",
        alt: "Dashboard",
        width: 1646,
        height: 965,
        blurhash:
          "f6LXDD000000004o00~qbD?vNFD%00W--;%M.8%g00sp.9Ip?b?G00M{%gV[?b.8",
      },
      {
        src: "/mudboard/4.png",
        alt: "Split Screen",
        width: 1665,
        height: 965,
        blurhash:
          "fKNwNDIn00009GR7.8IUoLo0RPj]DP_4D%M{%eNYIAxubEW:bbWTD%-;RiV@t8WF",
      },
      {
        src: "/mudboard/5.png",
        alt: "Landing Page",
        width: 1648,
        height: 965,
        blurhash:
          "f2Fr9YRp8yRkT[nl.7ohJOV[s.aM4UxH*GnQv,nmJ|My~XxbcWs;TuM}Q:nPt*nl",
      },
    ],
  },

  pct: {
    header_image: {
      src: "/pct/sample2.jpg",
      alt: "PCT Header",
      width: 6834,
      height: 2667,
      blurhash:
        "fZKxe=aKT0s9tlj=yGNGoznONeoeD$R-WAxCRnxa%2NIRlRkNGofbEWBt5xZS5bI",
    },
    screenshots: [
      {
        src: "/pct/1.webp",
        alt: "Washington",
        width: 1600,
        height: 1038,
        blurhash:
          "fkEzs8t8niozofW;.At6ofkDjZofxts-jtkCaxof%MofaekCj[ayxvoJjsW;WBf5",
      },
      {
        src: "/pct/2.webp",
        alt: "California. Silver Lake",
        width: 1600,
        height: 1153,
        blurhash:
          "fsEzTaRRs,j[f5a}yGRPoIayjrayxvV@oJaya#j@t7R-t6j[kCf6kEogofWBaxay",
      },
      {
        src: "/pct/3.webp",
        alt: "Sierras. Forrester Pass",
        width: 1600,
        height: 1034,
        blurhash:
          "fQL;v--=DiNIxtogE3xaM|Rlt6og?wxtt8NHt6RjtSWAogRkWAj[M{RjbIRiayWB",
      },
      {
        src: "/pct/4.webp",
        alt: "Sierras",
        width: 1600,
        height: 900,
        blurhash:
          "fzF?bDxaaej]W=j[.TjZfPR,W=oeEmR*ofR+oKj[NfW=kCt5n~WCaej[ofs,WBj?",
      },
      {
        src: "/pct/5.webp",
        alt: "Oregon",
        width: 1600,
        height: 1136,
        blurhash:
          "fCIzn;}?0*S5Wpj?s[R:$~ocWVWD01EN=ss+s.oL.6$xIqj[sms.adRkWWjYRlWE",
      },
      {
        src: "/pct/8.webp",
        alt: "Sierras",
        width: 1600,
        height: 1118,
        blurhash:
          "fiHVq]xts:oLV[oz-@n%s:axj[WCtmt6s:RjofWBR:ofR%WBayWVW:RjWBofWBa#",
      },
      {
        src: "/pct/6.webp",
        alt: "Sierras",
        width: 1600,
        height: 1124,
        blurhash:
          "fZJkyBNLZ~floextT#RjaJaeRjj]tSM{WBadoKbIJCxZaeM|V[WBtmxaRPbIWBax",
      },
      {
        src: "/pct/7.webp",
        alt: "Oregon",
        width: 1600,
        height: 1031,
        blurhash:
          "fkI=VrtSRjjZbEa|%%Sjf4j?WCoLK8f,aeWDoea{XUNHjYt6oea#SiRifikCWCj[",
      },
      {
        src: "/pct/IMG_5756.webp",
        alt: "Oregon",
        width: 1600,
        height: 1111,
        blurhash:
          "ffK-F5%1IB%2IUIU?wkCRjogWAM{jZR+a}aekCWBRjjZofj[ofj[xaa|ayj[WVjZ",
      },
      {
        src: "/pct/header.webp",
        alt: "Oregon",
        width: 1600,
        height: 1106,
        blurhash:
          "fpIrNRRjslNIocay~qR.obWCa{WCx[bcj[oKj[ayozayjuoLj[oLW?axa|oeWVbH",
      },
      {
        src: "/pct/IMG_5933.webp",
        alt: "Oregon",
        width: 1600,
        height: 972,
        blurhash:
          "fbIOUrR4RPbIR*jZ_NM|V@j[R*WC-;bcWCo1j@aytRWrs:oeaya#xuR-oet6oLof",
      },
      {
        src: "/pct/9.webp",
        alt: "Washington. Mount Rainer",
        width: 1600,
        height: 1199,
        blurhash:
          "fkGv3R9EWBWVofWB_4RjWBflayfPR.xuogflbHaxR.oLt7kCa}f6WYj[ofofj]j[",
      },
    ],
  },

  jonadrew: {
    header_image: {
      src: "/jonadrew/header.webp",
      alt: "Jonadrew Header",
      width: 1600,
      height: 748,
      blurhash:
        "fGI=Jaoz^+IV?bof59M{IUxt-;Rj~pIUDjofM{t7-;ofs:M{D%t7t8t7f6Rjaxay",
    },
    screenshots: [
      {
        src: "/jonadrew/4-26.webp",
        alt: "Close-up portrait with brown eyes",
        width: 1600,
        height: 2063,
        blurhash:
          "fiMGx8_N?wxaxuIU%g%Mf+M{M{RPxuIUxtIUt7t7j[kCa#oeoeWCS$o0t6R*WBbb",
      },
      {
        src: "/jonadrew/4-26b.webp",
        alt: "Portrait of woman in bandana looking upward",
        width: 1600,
        height: 1582,
        blurhash:
          "fsO:R..8?^IU%MRj%1WCRkt7WBjZ%#afV@RPV@fkx]M{ofoKV[ofR+jsV?ozozof",
      },
      {
        src: "/jonadrew/4-26c.webp",
        alt: "Lemon slices on fabric in soft lighting",
        width: 1600,
        height: 1732,
        blurhash:
          "fhP6s-.7_NIo-;M{WqMxxubIWWxu.9R*MxoLRjt7t7t7R*s:adRj%gWBRjoefka}",
      },
      {
        src: "/jonadrew/9-25.webp",
        alt: "Still life of a cracked open egg",
        width: 1600,
        height: 1502,
        blurhash:
          "fSM7V[oeo$xut8ay~pazRkoLV@WBx^j[RiRjRjofIUf6oeWBozofs:WXR*ocofWV",
      },
      {
        src: "/jonadrew/9-26.webp",
        alt: "Glass of water study with shadow",
        width: 1600,
        height: 1528,
        blurhash:
          "f9L;d7-o~W%Mj[jZ~pE1R*WBt7xu-:%LD*M{WBRj%MaeM{xuRjRjxtWBj]M{xut7",
      },
      {
        src: "/jonadrew/9-26b.webp",
        alt: "Tangerine segments in warm lighting",
        width: 1600,
        height: 1403,
        blurhash:
          "fAJ7R500Lg9wKP#k9Z~B9aO@s.r=0R-;#8%1#kOY4oE*-o#7S5tRMwbvr=IVOZM|",
      },
      {
        src: "/jonadrew/9-26c.webp",
        alt: "Lemon slices on fabric in soft lighting",
        width: 1600,
        height: 1937,
        blurhash:
          "fRLz${IUK-t8xYs+W9NGa~Rjt7t7KSs,xAf,V?ofX9jYoLR+n~t6I]WXr;s+WBWB",
      },
      {
        src: "/jonadrew/9-26f.webp",
        alt: "Still life of cracked egg with shell fragments",
        width: 1600,
        height: 1616,
        blurhash:
          "fCJHXCo#5ubbS~w]00jroaWCRls.CToL+?adn5SOxTaytAxa%KNIQ-t7SzWXS4af",
      },
      {
        src: "/jonadrew/9-26g.webp",
        alt: "Egg yolk balanced between chopsticks",
        width: 1600,
        height: 1251,
        blurhash:
          "f8IX{XNeP;RRzUnhvyV[TejbrXn~L2nhquxYk=bICSxCvLs,bba#D+skxtozRkbb",
      },
      {
        src: "/jonadrew/9-26h.webp",
        alt: "Spoon of honey dripping into a jar",
        width: 1600,
        height: 2064,
        blurhash:
          "fBH_e|t7pdIVnMt8_NM|Z$WBV@oz00xuRPofWYt6t7xuxuNGozadyDIUnOWBozWC",
      },
      {
        src: "/jonadrew/9-27b copy.webp",
        alt: "Digital rendering of a faceted crystal gem",
        width: 1600,
        height: 2553,
        blurhash:
          "f7G@uyi|T1kVeTR*~CWC5lazwIR*|2ELS1-WSejZ1HofnOIobv$*XTxH=KW-o#oL",
      },
      {
        src: "/jonadrew/10-2 try 2.webp",
        alt: "Portrait of a bird with strong lighting",
        width: 1600,
        height: 1636,
        blurhash:
          "fEFr-HRQ?^WA$$-U_MniIqt7RPofIptR#+R5s:NHx]W=$erqOEt7t7V@M{soWBX8",
      },
      {
        src: "/jonadrew/4-26.webp",
        alt: "Portrait of a girl with a neutral expression",
        width: 1600,
        height: 2063,
        blurhash:
          "fiMGx8_N?wxaxuIU%g%Mf+M{M{RPxuIUxtIUt7t7j[kCa#oeoeWCS$o0t6R*WBbb",
      },
      {
        src: "/jonadrew/10-2.webp",
        alt: "Digital rendering if toast!",
        width: 1600,
        height: 1635,
        blurhash:
          "fHFY=CM|.kNGoc$%_LsSR,t7eUkC9vxtrsRPbZNHb^bcs9nOOEozozWBM|j[RkWq",
      },
      {
        src: "/jonadrew/9-26e.webp",
        alt: "Digital rendering of side profile of a hawk",
        width: 1600,
        height: 1627,
        blurhash:
          "f8IqS@0K00-n00g*0MbvIUoM%#r;00-:xrNf_NVW=rWYyYnMm+XU00Wr%#a0#kbv",
      },
    ],
  },
};
