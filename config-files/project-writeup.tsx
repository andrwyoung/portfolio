import {
  FaBook,
  FaCalendarDay,
  FaCloudShowersWater,
  FaImages,
  FaLeaf,
  FaMountainSun,
  FaPaintRoller,
  FaPencil,
  FaSkull,
  FaTree,
} from "react-icons/fa6";
import type { ProjectType } from "./project-styles";
import { InlineLinkListItem } from "@/components/hyperlink";
import { FaEdit, FaMapMarkerAlt, FaPaintBrush } from "react-icons/fa";

export const projectContent: Record<
  ProjectType,
  {
    what: React.ReactNode;
    why: React.ReactNode;
    previewSections: {
      title: string;
      icon?: React.ReactNode;
      content: React.ReactNode;
    }[];
    columns?: number; // default is 1
  }
> = {
  concaly: {
    what: (
      <p>
        Concaly is a <strong>convention planning tool</strong> for artists to
        find conventions and organize deadlines. Built from my own need for it
        as an artist.
      </p>
    ),
    why: (
      <>
        <p>
          Building ConCaly marked my return to coding, and a fast track into
          frontend dev and UI/UX. I had to <strong>learn a lot</strong> quickly.
        </p>

        <p className="mt-4">
          As I was learning, I remembered why I started coding in the first
          place: I realized <strong>I still love it</strong>. My experience as
          an illustrator made picking up UI/UX feel natural, and I felt like I
          found what I was made for.
        </p>
        <p className="mt-4">
          But as Concaly was gaining traction, I saw how much more potential{" "}
          <strong>Mudboard</strong> had. The hard part was making the call to
          give up something good to pursue something great.
        </p>
      </>
    ),
    previewSections: [
      {
        title: "Other Links",
        icon: <FaEdit className="size-5" />,
        content: (
          <ul className="space-y-0.5">
            <InlineLinkListItem
              label="Why did I stop"
              links={[
                "https://jondrew.notion.site/Why-I-Stopped-Building-Concaly-2232e809fa4e80939a29e6a053041c2c?source=copy_link",
              ]}
              accentClass="text-concaly-secondary-darker"
            />

            <InlineLinkListItem
              label="Github"
              links={["https://github.com/andrwyoung/con-app"]}
              accentClass="text-concaly-secondary-darker"
            />
            <InlineLinkListItem
              label="Reflections"
              links={[
                "https://jondrew.notion.site/ConCaly-Writeup-1e72e809fa4e80f7b714c8f6cf848809?source=copy_link",
              ]}
              accentClass="text-concaly-secondary-darker"
            />
          </ul>
        ),
      },
      {
        title: "Timeline",
        icon: <FaCalendarDay />,
        content: (
          <ul className="space-y-0.5">
            <li>
              - <span className="font-semibold">W1:</span> Roadmap, Auth, Schema
            </li>
            <li>
              - <span className="font-semibold">W2:</span> Mapbox, Search
            </li>
            <li>
              - <span className="font-semibold">W3:</span> Filtering, UI polish
            </li>
            <li>
              - <span className="font-semibold">W4:</span> Calendar + List logic
            </li>
            <li>
              - <span className="font-semibold">W5:</span> Mobile, CMS, Writeups
            </li>
            <li>
              - <span className="font-semibold">W6-9:</span> Feedback loops.
              Pivoted.
            </li>
          </ul>
        ),
      },
      {
        title: "Stack",
        icon: <FaMapMarkerAlt />,
        content: (
          <ul className="space-y-0.5">
            <li>
              - Map: <span className="font-semibold">Mapbox</span>
            </li>
            <li>
              - Data Gathering: <span className="font-semibold">Python</span>
            </li>
            <li>
              - Database and Auth:{" "}
              <span className="font-semibold">Supabase</span>
            </li>
            <li>
              - Frontend + Backend:{" "}
              <span className="font-semibold">Next.js</span>
            </li>
            <li>
              - Hosting: <span className="font-semibold">Vercel</span>
            </li>
          </ul>
        ),
      },
    ],
  },

  mudboard: {
    what: (
      <p>
        <span className="font-semibold">Mudboard</span> is a{" "}
        <span className="font-semibold">workspace </span> for collecting and
        organizing images. And a space to{" "}
        <span className="font-semibold">remix, explore and share</span> curated
        galleries with others.
      </p>
    ),
    why: (
      <>
        <p>
          This project really{" "}
          <span className="font-semibold">stretched me</span>. Not only because
          I implemented difficult UX features, but because of everything that
          comes with building a business: copywriting, business strategy,
          positioning, outreach, support.
        </p>
        <p className="mt-4 font-semibold">
          It's difficult to be a solo founder.
        </p>
        <p className="mt-4">
          I learned just{" "}
          <span className="font-semibold">how much work it takes</span> to get a
          single user, but had the privilege and honor of seeing people fall in
          love something that I built from nothing. What an gift that is!
        </p>
        <p className="mt-4">
          I stopped pushing this project because I was really{" "}
          <span className="font-semibold">struggling</span> with outreach, so I
          decided to make it free. I still take feature requests every now and
          then from the users that use Mudboard.
        </p>
      </>
    ),
    previewSections: [
      {
        title: "Links",
        icon: <FaPaintBrush />,
        content: (
          <ul className="space-y-0.5">
            <InlineLinkListItem
              label="Github"
              links={["https://github.com/andrwyoung/mudboard"]}
              accentClass="text-mudboard-accent"
            />
            <InlineLinkListItem
              label="Why should Mudboard Exist"
              links={[
                "https://jondrew.notion.site/Why-should-Mudboard-exist-2312e809fa4e80fa9114edece43d66de?source=copy_link",
              ]}
              accentClass="text-mudboard-accent"
            />
            <InlineLinkListItem
              label="Road Map"
              links={[
                "https://jondrew.notion.site/Mudboard-Roadmap-2162e809fa4e80eb94add8aa315c769d?source=copy_link",
              ]}
              accentClass="text-mudboard-accent"
            />
            {/* <InlineLinkListItem
              label="Pricing Commitment"
              links={[
                "https://jondrew.notion.site/Mudboard-Pricing-2332e809fa4e802dab4be35bb639e5d8?source=copy_link",
              ]}
              accentClass="text-mudboard-accent"
            /> */}
          </ul>
        ),
      },
      {
        title: "Results",
        icon: <FaLeaf />,
        content: (
          <ul className="space-y-0.5">
            <li>- Majority of the coding done in 2 months (~25k loc)</li>
            <li>- Reached out to 500+ artists</li>
            <li>- Demoed to ~100 users</li>
            <li>- Kept around 10 DAU</li>
            <li>- Made 40 bucks</li>
          </ul>
        ),
      },
      {
        title: "Stack",
        icon: <FaImages />,
        content: (
          <ul className="space-y-0.5">
            <li>
              - Design: <span className="font-semibold">Notebook</span>
            </li>
            <li>
              - Drag and Drop: <span className="font-semibold">Dnd Kit</span>
            </li>
            <li>
              - Grid View: <span className="font-semibold">Custom</span>
            </li>
            <li>
              - Freeform Canvas: <span className="font-semibold">Custom</span>
            </li>
            <li>
              -{" "}
              <span className="font-semibold">Supabase + Next.js + Vercel</span>
            </li>
            {/* <li>
              - Database and Auth:{" "}
              <span className="font-semibold">Supabase</span>
            </li>
            <li>
              - Frontend + Backend:{" "}
              <span className="font-semibold">Next.js</span>
            </li>
            <li>
              - Hosting: <span className="font-semibold">Vercel</span>
            </li> */}
          </ul>
        ),
      },
    ],
  },
  pct: {
    what: (
      <p>
        In the summer of 2024, I thru-hiked the{" "}
        <strong>Pacific Crest Trail</strong> — a 2650 mile journey from Mexico
        to Canada — using gear I made.
      </p>
    ),
    why: (
      <>
        <p>There were 2 things that really stuck with me:</p>
        <ol className="list-decimal list-inside space-y-2 py-2">
          <li>
            <strong>I can do hard things</strong>. The hike was hard in more
            ways than one — from rats chewing through my gear to running low on
            water. I was scared, lonely and in pain many days. I didn't have
            confidence, <strong>yet I still did it</strong>.
          </li>
          <li>
            <strong>I'm not in control</strong>. I spent so much time worrying
            about food resupplies, river crossings, and fires. Yet, as big as
            those problems are, it's <strong>out of my hands</strong>. I can
            only move forward. And strangely enough, things tended to work out.
          </li>
        </ol>
        <p className="pt-4">
          I think what I really learned was <strong>courage</strong>: moving
          forward despite fear, and letting go of control when nothing felt
          certain. I didn’t come off trail feeling more confident or
          self-assured. But I did learn how to keep going anyway.
        </p>
      </>
    ),
    previewSections: [
      {
        title: "Reflections",
        icon: <FaMountainSun />,
        content: (
          <ul className="space-y-0.5">
            <InlineLinkListItem
              label="Daily Hiker Log"
              links={[
                "https://docs.google.com/spreadsheets/d/1vvdS_cpu703A6ODHuChUXefpH1-JA6VGIaMkT5ZDjHY/edit?gid=0#gid=0",
              ]}
              accentClass="text-pct-accent"
            />
            <InlineLinkListItem
              label="Newsletter during the hike"
              links={[
                "https://blog.jonadrew.com/posts/wwn-pacific-crest-trail-8",
              ]}
              accentClass="text-pct-accent"
            />
            <InlineLinkListItem
              label="After-hike reflection"
              links={["https://medium.com/@andrwyoung/p-7544392c4daf"]}
              accentClass="text-pct-accent"
            />
          </ul>
        ),
      },

      {
        title: "Gear",
        icon: <FaCloudShowersWater />,
        content: (
          <ul className="space-y-0.5">
            <InlineLinkListItem
              label="How I sewed my gear"
              links={[
                "https://jondrew.notion.site/Sewing-Gear-19b2e809fa4e801192f0c21c806f1605",
              ]}
              accentClass="text-pct-accent"
            />
            <InlineLinkListItem
              label="Full Gear breakdown"
              links={[
                "https://docs.google.com/spreadsheets/d/1Fc8pnEkADU9mpBzUXr92X5dH3Zhp9lKf_4nuR_rWyZY/edit?gid=0#gid=0",
              ]}
              accentClass="text-pct-accent"
            />
          </ul>
        ),
      },
      {
        title: "Stats",
        icon: <FaTree />,
        content: (
          <ul className="">
            <li>- Longest day: 42.6 mi</li>
            <li>- Total days: 105 days</li>
            <li className="flex flex-col w-fit">
              - Marathon days (26.2+ mi): 24
              <span className="text-xs px-4 ">(longest streak: 6 days)</span>
            </li>
            <li>- Hitchhikes: 19</li>
            <li>- Bears: 0</li>
          </ul>
        ),
      },
    ],
    columns: 2,
  },
  quail: {
    what: (
      <p>
        <strong>Quail</strong> is a company aimed at helping self motivated
        learners take control of how they learn, by creating tools that help you
        learn topics <strong>as efficiently as possible</strong>.
      </p>
    ),
    why: (
      <>
        <p className="mb-4">
          Since my bottleneck for Mudboard was distribution, I decided to
          partner with someone else who is really great at marketing and sales.
          It's been really nice to have someone else to learn from.
        </p>
        <p className="mb-4">
          Something that's stretching me is having to think deeply about the
          best architectural decisions for future coders (versus simply thinking
          about execution like my previous products).
        </p>
        <p className="">
          {" "}
          It's rather fun to be able to work on something like this, and I'm
          excited to see how the journey goes!
        </p>
      </>
    ),
    previewSections: [
      // {
      //   title: "Links",
      //   icon: <FaEdit className="size-5" />,
      //   content: (
      //     <ul className="space-y-0.5">
      //       <InlineLinkListItem
      //         label="Github"
      //         links={["https://github.com/yourusername/quail"]}
      //         accentClass="text-quail-secondary"
      //       />
      //       <InlineLinkListItem
      //         label="Live Site"
      //         links={["https://www.example.com/quail"]}
      //         accentClass="text-quail-secondary"
      //       />
      //     </ul>
      //   ),
      // },
      {
        title: "Progress",
        icon: <FaCalendarDay />,
        content: (
          <ul className="space-y-0.5">
            <li>
              - <span className="font-semibold">M1:</span> Planning & Design
            </li>
            <li>
              - <span className="font-semibold">M2:</span> MVP Released to the
              app store
            </li>
            <li>
              - <span className="font-semibold">M3:</span> Outreach and Feedback
            </li>
          </ul>
        ),
      },
      {
        title: "Stack",
        icon: <FaPaintRoller />,
        content: (
          <ul className="space-y-0.5">
            <li>
              - Mobile App:{" "}
              <span className="font-semibold">React Native + Expo</span>
            </li>
            <li>
              - Landing Page: <span className="font-semibold">Next.js</span>
            </li>
            <li>
              - Database:{" "}
              <span className="font-semibold">SQLite + Drizzle. Supabase</span>
            </li>
            <li>
              - Art: <span className="font-semibold">Jonadrew</span>
            </li>
          </ul>
        ),
      },
    ],
    columns: 3,
  },

  jonadrew: {
    what: (
      <p>
        In September of 2022, I left my software job to pursue{" "}
        <strong>illustration full-time</strong>. It's the hardest decision I've
        ever made, but I learned so much about life, business and agency through
        it.
      </p>
    ),
    why: (
      <>
        <p>
          I left my job because of the desire for freedom, and the dread of a
          life I would have lived if I stayed. But I quickly learned how steep
          the cost of freedom was.
        </p>
        <p className="mt-4">
          I imagined I would be drawing all day. Instead, I was cold-emailing
          publishers, digging through Facebook groups and learning that sales,
          not skills alone, is what moves the needle.
        </p>

        <p className="mt-4">
          And by all external measures I'm not very successful. I made little
          money and my follower count is underwhelming, yet I'm{" "}
          <strong>so happy and proud</strong> of myself for{" "}
          <strong>just trying</strong> and taking that leap. That's successful
          to me. And who knows, maybe the rest will catch up eventually.
        </p>
      </>
    ),
    previewSections: [
      {
        title: "Drawings Stats",
        icon: <FaPencil />,
        content: (
          <ul className="space-y-0.5">
            <li>- Drawing reps: over 8,000</li>
            <li>- Comissions: ~50 clients</li>
            <li>
              - Revenue: <FaSkull className="inline" />
            </li>
          </ul>
        ),
      },
      {
        title: "Works Published",
        icon: <FaBook />,
        content: (
          <ul className="space-y-0.5">
            <InlineLinkListItem
              label="Book cover set"
              links={[
                "https://www.kickstarter.com/projects/benwolf/two-kids-books-series-from-award-winning-author-ben-wolf",
              ]}
              accentClass="text-jonadrew-secondary"
            />
            <InlineLinkListItem
              label="Call of Poohthulu"
              links={[
                "https://www.kickstarter.com/projects/1155362758/the-call-of-pooh-thulhu-cthulhu-comes-to-the-100-acre-woods",
              ]}
              accentClass="text-jonadrew-secondary"
            />

            <li>- Graphic Novel (Coming soon)</li>
          </ul>
        ),
      },

      {
        title: "Tools",
        icon: <FaPaintRoller />,
        content: (
          <ul className="space-y-0.5">
            <li className="flex flex-col w-fit">
              - Clip Studio Paint Ex
              <span className="text-xs px-4 ">
                (In the past have used Procreate, Photoshop and Krita)
              </span>
            </li>
            <li>- Huion Kamvas Pro 16</li>
            <li>- Normal pencil + paper</li>
          </ul>
        ),
      },
    ],
    columns: 3,
  },
};
