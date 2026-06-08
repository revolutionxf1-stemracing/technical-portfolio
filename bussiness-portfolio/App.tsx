import React from 'react';

type Cell = React.ReactNode;
type Row = Cell[];

const totalPages = 10;

const sponsors = [
  { file: 'titanes_sponsor.jpeg', label: 'Titanes' },
  { file: 'postrecito-de-isabel_sponsor.jpeg', label: 'El Postrecito de Isabel' },
  { file: 'monita_sponsor.jpeg', label: 'Monita' },
  { file: 'panalon_sponsor.jpeg', label: 'Panalon' },
  { file: 'black-and-white_sponsor.jpeg', label: 'Black & White' },
  { file: 'lorena_sponsor.jpeg', label: 'Lorena Solutions' },
  { file: 'ayuntamiento_sponsor.png', label: 'Majadahonda City Council' },
  { file: 'saramago_sponsor.jpeg', label: 'IES Jose Saramago' },
  { file: 'stem_racing_sponsor.jpeg', label: 'STEM Racing' },
];

/* ────────── layout primitives ────────── */

const Page: React.FC<{ title: string; page: number; ghost?: string; children: React.ReactNode }> = ({ title, page, ghost, children }) => (
  <section className="a3-page relative bg-[#050505] text-gray-200 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.45)] mb-10 border border-gold-400/15 rounded-[10px] flex flex-col">
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
    <div className="absolute -bottom-10 left-6 text-[110px] leading-none font-black text-white/[0.025] uppercase tracking-[-0.08em] pointer-events-none select-none">{ghost || 'REVOLUTIONX'}</div>
    <header className="relative z-10 h-[72px] px-7 pt-2 border-b-[4px] border-gold-400 flex items-end justify-between shrink-0">
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-gray-400 mb-[-2px]">Enterprise Portfolio</div>
        <h1 className="text-[40px] leading-none font-black uppercase tracking-[-0.055em] text-white">{title}</h1>
      </div>
      <div className="flex items-center gap-2.5 pb-1.5">
        <div className="w-9 h-9 rounded-full border-2 border-gold-400 flex items-center justify-center text-gold-400 text-[10px] font-black">RX</div>
        <div className="text-right">
          <div className="text-gold-400 font-black text-[17px] leading-none">RevolutionX</div>
          <div className="text-gray-500 uppercase tracking-[0.24em] text-[7px] mt-0.5">STEM Racing</div>
        </div>
      </div>
    </header>
    <main className="relative z-10 px-7 py-3 flex-1 overflow-hidden">{children}</main>
    <footer className="relative z-10 h-8 px-7 border-t border-gold-400/35 flex items-center justify-between bg-black shrink-0">
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 bg-gold-400 -skew-x-12" />
        <span className="text-white font-black uppercase text-[10px]">Page {page}</span>
      </div>
      <span className="text-gray-500 uppercase tracking-[0.24em] text-[8px]">RevolutionX Team</span>
      <span className="text-gold-400 font-mono text-[9px]">{String(page).padStart(2, '0')}/{totalPages}</span>
    </footer>
  </section>
);

const Cover: React.FC = () => (
  <section className="a3-page relative bg-black text-white overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.45)] mb-10 border border-gold-400/15 rounded-[10px]">
    <img src="/assets/render_coche.png" alt="RX NightBlade" className="absolute inset-0 w-full h-full object-cover opacity-70" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
    <div className="relative z-10 h-full flex flex-col justify-between p-12">
      <div className="max-w-[950px]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-full border-2 border-gold-400 flex items-center justify-center text-gold-400 font-black text-[16px]">RX</div>
          <div className="text-white text-[30px] font-light tracking-wide">RevolutionX</div>
        </div>
        <div className="text-[68px] font-thin tracking-[0.18em] leading-none uppercase">Enterprise</div>
        <div className="text-[85px] font-black tracking-[-0.08em] leading-none uppercase">Portfolio</div>
        <div className="mt-3 text-gray-400 uppercase tracking-[0.22em] text-[13px]">STEM Racing 2025/2026 — National Finals</div>
        <div className="mt-1.5 text-gold-400 uppercase tracking-[0.18em] font-black text-[11px]">Project Management · Brand Identity · Marketing · Sponsorship · Sustainability</div>
      </div>
      <div className="border-t border-gold-400/25 pt-4">
        <div className="grid grid-cols-[1fr_1.6fr] gap-6">
          <div>
            <div className="text-gray-500 uppercase tracking-[0.25em] text-[8px] mb-1.5">Table of Contents</div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-[2px] text-[9px] text-gray-400">
              {['1. Initiation Process', '2. Scope, Schedule & Budget', '3. Roles & Responsibilities', '4. Comms & Risk Management', '5. Risk Assessment & Monitoring', '6. Team Identity', '7. Marketing', '8. Media, Events & Nova Alliance', '9. Sponsorship', '10. Sustainability'].map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
          <SponsorLogos />
        </div>
      </div>
    </div>
  </section>
);

const SponsorLogos: React.FC = () => (
  <div>
    <div className="text-gray-500 uppercase tracking-[0.25em] text-[8px] mb-1.5">Sponsors & Institutional Support</div>
    <div className="flex gap-2 flex-wrap">
      {sponsors.map((s) => (
        <div key={s.file} className="h-11 min-w-[88px] px-2 bg-white/95 border border-white/10 flex items-center justify-center">
          <img src={`/assets/${s.file}`} alt={s.label} className="max-h-7 max-w-[84px] object-contain" />
        </div>
      ))}
    </div>
  </div>
);

const Block: React.FC<{ title: string; children: React.ReactNode; tag?: string }> = ({ title, children, tag }) => (
  <section className="mb-4 break-inside-avoid">
    {tag && <div className="inline-block bg-gold-400 text-black text-[8.5px] font-black uppercase tracking-[0.08em] px-2 py-0.5 mb-0.5">{tag}</div>}
    <h2 className="text-gold-400 uppercase text-[14px] font-black tracking-[0.04em] border-b border-gold-400/30 pb-1 mb-2">{title}</h2>
    {children}
  </section>
);

const T: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[12px] leading-[1.5] text-gray-300 text-justify mb-2">{children}</p>
);

const Tiny: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[8.5px] leading-[1.3] text-gray-500 italic mt-0.5">{children}</p>
);

const List: React.FC<{ items: Cell[] }> = ({ items }) => (
  <ul className="space-y-0.5 mb-1.5">
    {items.map((item, i) => (
      <li key={i} className="grid grid-cols-[14px_1fr] gap-1 text-[11.5px] leading-[1.42] text-gray-300">
        <span className="text-gold-400 font-black">&gt;&gt;</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Table: React.FC<{ headers: string[]; rows: Row[]; columns?: string }> = ({ headers, rows, columns }) => (
  <div className="border border-gold-400/25 bg-black/70 mb-2">
    <div className="grid bg-gold-400 text-black" style={{ gridTemplateColumns: columns || `repeat(${headers.length}, 1fr)` }}>
      {headers.map((h, i) => (
        <div key={`${h}-${i}`} className="text-[9.5px] uppercase font-black px-2 py-1.5 border-r border-black/25 last:border-r-0 text-center leading-tight">{h}</div>
      ))}
    </div>
    {rows.map((row, ri) => (
      <div key={ri} className="grid border-t border-gold-400/15" style={{ gridTemplateColumns: columns || `repeat(${headers.length}, 1fr)` }}>
        {row.map((cell, ci) => (
          <div key={ci} className="text-[10.5px] leading-[1.35] px-2 py-1.5 text-gray-300 border-r border-gold-400/10 last:border-r-0 flex items-center justify-center text-center">{cell}</div>
        ))}
      </div>
    ))}
  </div>
);

const StatGrid: React.FC<{ stats: Array<[string, string, string?]> }> = ({ stats }) => (
  <div className="grid grid-cols-2 gap-2 mb-2">
    {stats.map(([label, value, note], i) => (
      <div key={i} className="border border-gold-400/25 bg-black/60 p-3">
        <div className="text-[9px] uppercase tracking-[0.16em] text-gray-500">{label}</div>
        <div className="text-[26px] leading-none font-black text-gold-400 mt-1.5">{value}</div>
        {note && <div className="text-[9.5px] leading-tight text-gray-400 mt-1.5">{note}</div>}
      </div>
    ))}
  </div>
);

const MiniCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="border border-gold-400/20 bg-black/50 p-3 mb-2">
    <div className="text-gold-400 uppercase font-black text-[10.5px] mb-1">{title}</div>
    <div className="text-[11px] leading-[1.4] text-gray-300">{children}</div>
  </div>
);

const VBox: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <div className={`border border-gold-400/25 bg-[#090909] p-3 mb-2 ${className}`}>
    <div className="text-[9px] text-gold-400 uppercase tracking-[0.18em] font-black mb-2">{title}</div>
    {children}
  </div>
);

/* ═══════════════ PAGE 1 — INITIATION PROCESS ═══════════════ */

const Page1: React.FC = () => (
  <Page title="Initiation Process" page={1} ghost="PROJECT">
    <div className="grid grid-cols-3 gap-5 h-full">
      {/* col 1 */}
      <div className="flex flex-col">
        <Block title="Kick-Off Meeting" tag="30 April 2026">
          <T>On 30 April, the RevolutionX team held its first meeting ahead of the national finals of the 2025/2026 season. The context of this meeting is worth noting: the day before, we had taken part in the Madrid regional competition. Every member of the team came away with mixed feelings about our performance. We were clearly happy — we had achieved our first goal: a place at the national finals on 16 June. At the same time, we all felt a certain bittersweet sense when it came to our results at Jarama. We knew that if we wanted to reach our main objective — qualifying for the international finals — we would need to improve across the board and reinvent ourselves.</T>
          <T>During this first meeting, it became clear that we were going to approach the national finals differently. The natural starting point for any project followed: answering the WH questions (Who, Why, What, When, Where, How). Below are our answers.</T>
        </Block>
        <Block title="Six WH Questions" tag="Project Definition">
          <Table
            headers={['Question', 'Answer']}
            columns="0.5fr 2.2fr"
            rows={[
              ['Who?', 'We are RevolutionX, a team competing in the STEM Racing competition. We are students in Years 10 and 11 at IES José Saramago secondary school in Majadahonda.'],
              ['Why?', 'After our first year in this competition, we realised that we are genuinely passionate about it. We also have a clear goal to fulfil: qualifying for the international finals.'],
              ['What?', 'We need to submit two portfolios, prepare a verbal presentation and, most importantly, design and build a car that will race on a 20-metre track.'],
              ['When?', 'The day after the regional competition. The more time we have to work, the further ahead we will be compared to other teams.'],
              ['Where?', 'We have already completed the first step at the Madrid regional finals. To achieve our main goal, the last step will be finishing on the podium in the Professional category at nationals on 16 June.'],
              ['How?', 'We see ourselves as a reinvented team — one that has improved its car and developed one of the strongest brand identities in the competition.'],
            ]}
          />
        </Block>
        <StatGrid stats={[['Team', '6+2', '6 core + 2 assistants'], ['Category', 'PRO', 'Professional class'], ['Finals', '16 Jun', 'National competition'], ['School', 'IES JS', 'Majadahonda']]} />
      </div>

      {/* col 2 */}
      <div className="flex flex-col">
        <Block title="Project Charter" tag="Official Authorisation">
          <T>The project charter is a formal document that marks the official starting point of any project. It sets out, in a concise and structured manner, all the essential information that defines it: its purpose, its objectives, the key milestones, those responsible, the constraints and the anticipated risks. Its primary function is to serve as an initial agreement between all those involved, setting out in writing what is to be done, why, and who will carry it out. In this way, all team members start from a shared understanding, avoiding misunderstandings or deviations throughout the process.</T>
          <Table
            headers={['Field', 'Content']}
            columns="0.85fr 1.7fr"
            rows={[
              ['Project', 'STEM Racing 2025/2026'],
              ['Team name', 'RevolutionX'],
              ['Date', '04/04/2026'],
              ['Project managers', 'Saúl Morán & Martín Cendra'],
              ['Team members', 'Martina Corredor, Víctor Jiménez, Yago Álvarez & Álvaro Cardona'],
              ['Description', 'STEM Racing is a competition aimed at students between the ages of 12 and 19, built around two core pillars: the design and construction of a miniature racing car, and the comprehensive development of an original brand. The project combines knowledge from engineering, design, marketing and business management.'],
              ['Justification', 'Dual purpose: an exceptional opportunity for personal and professional growth, and a competitive challenge to improve on the results achieved at the regional competition, setting a higher standard and a greater level of competitive ambition.'],
            ]}
          />
        </Block>
        <Block title="Milestones">
          <Table
            headers={['Milestone', 'Estimated date']}
            columns="1.4fr 0.8fr"
            rows={[
              ['Project initiation', 'June 2025'],
              ['Deliverables commencement', 'September 2025'],
              ['1st submission of deliverables', 'April 2026'],
              ['Regional competition', 'April 2026'],
              ['2nd submission of deliverables', 'June 2026'],
              ['National competition', 'June 2026'],
            ]}
          />
        </Block>
      </div>

      {/* col 3 */}
      <div className="flex flex-col">
        <Block title="Acceptance, Assumptions, Constraints & Risks">
          <T><strong className="text-gold-400">Acceptance criteria:</strong> A task will be considered complete and approved only when the relevant department coordinator gives their formal sign-off. No deliverable will be deemed valid without this approval, thereby ensuring the quality standards set by the team are upheld.</T>
          <T><strong className="text-gold-400">Assumptions:</strong> The competitive level in the Professional category at the national finals is expected to be considerably high. As a result, the team will need to perform to the best of its abilities in order to secure qualification for the international finals, with no room for complacency or for delivering work that falls below the required standard.</T>
          <T><strong className="text-gold-400">Constraints:</strong> The team's primary constraint is the availability of time within the school environment. With approximately one hour of working time per day at school, the team will need to make the most of every session, prioritising tasks and managing time rigorously in order to meet the established deadlines.</T>
          <T><strong className="text-gold-400">Risks:</strong> Two main risks have been identified that could compromise the development and outcome of the project. The first is the failure to meet task deadlines, which could trigger a chain of delays and undermine the quality of the final work. The second is the possibility of the car sustaining damage or a mechanical failure in the days leading up to the competition, putting the team's participation at risk. Both risks will need to be monitored and managed proactively throughout the season.</T>
          <Tiny>This document has been reviewed and approved by the undersigned, who take responsibility for ensuring compliance with the terms set out herein. — Saúl Morán & Martín Cendra, Team Managers. RevolutionX · STEM Racing 2025/2026</Tiny>
        </Block>
        <Block title="Scope Statement" tag="Scope Definition">
          <T>The scope statement is a document that every project must create in order to determine how far a project can go and what is within the team's hands to achieve its objective.</T>
          <Table
            headers={['Field', 'Definition']}
            columns="0.85fr 1.7fr"
            rows={[
              ['Project managers', 'Martín Cendra & Saúl Morán'],
              ['Date', 'Sep 2025 – Jun 2026'],
              ['Name', 'RevolutionX STEM Racing National Finals Project'],
              ['Objective', 'Qualification for the international finals'],
              ['In scope', 'Submission of deliverables, acquisition of resources'],
              ['Out of scope', 'Working time at school, fundamental resources (machinery, etc.)'],
              ['Acceptance', 'A task will be accepted once the coordinator of the sector has approved it'],
              ['Deliverables', 'Car, Sponsorship Prospectus, Enterprise Portfolio, Engineering Portfolio, Search of resources, Uniform, Social Media'],
              ['Constraints', 'Budget: 1,100€ · Team Size: 6 members + 2 assistants · Time frame: 2 months (since regional finals) · Limited time at school'],
            ]}
          />
        </Block>
      </div>
    </div>
  </Page>
);

/* ═══════════════ PAGE 2 — SCOPE, SCHEDULE & BUDGET ═══════════════ */

const Page2: React.FC = () => (
  <Page title="Scope, Schedule & Budget" page={2} ghost="SCOPE">
    <div className="grid grid-cols-3 gap-5 h-full">
      {/* col 1 */}
      <div className="flex flex-col">
        <Block title="Work Breakdown Structure (WBS)" tag="Scope Baseline">
          <T>The Work Breakdown Structure (WBS) is a technique that enables us to visualize the different phases and stages of each task completed. Below is the team's WBS for the most important deliverables. It decomposes large outcomes into manageable work packages so each area can be planned, assigned and monitored independently.</T>
          <Table
            headers={['Area', 'Deliverable', 'Activity Stages']}
            columns="0.5fr 0.85fr 2fr"
            rows={[
              ['ENG', 'Car', 'Conceptualisation → Sketch → 3D Modelling → Testing → Refinement → Manufacturing'],
              ['ENG', 'Wind Tunnel', 'Conceptualisation → Design Structure → 3D Modelling → Part Printing → Assembly'],
              ['ENG', 'Tech Portfolio', 'Conceptualisation → Sketch → Refinement → Graphics → Final Refinement'],
              ['BIZ', 'Sponsorship Prospectus', 'Conceptualisation → Sketch → Refinement'],
              ['BIZ', 'Nova Alliance', 'Collaboration (Owla) → Strategy → Contact → Publication'],
              ['BIZ', 'Uniforms', 'Conceptualisation → Prototyping → Refinement → Manufacturing'],
              ['BIZ', 'Pit Display', 'Brainstorming → Prototyping → Reference Analysis → Refinement'],
            ]}
          />
        </Block>
        <Block title="Schedule" tag="Gantt Chart">
          <T>The organisational schedule has been a key element in the development and organisation of RevolutionX, and we have been updating it roughly every month to ensure consistent organisation. Our schedule is based on a Gantt chart — a structured diagram that shows the start and end dates and the duration of a specific project. This allows us to track the project's duration to know when it will finish, thereby enabling better planning.</T>
          <VBox title="Schedule Baseline — Gantt View">
            <div className="grid grid-cols-[130px_1fr] gap-1.5">
              <div />
              <div className="grid grid-cols-10 gap-0.5 text-[7px] text-gray-500 uppercase text-center">
                {['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Apr', 'May', 'Jun*', 'Final'].map((m, i) => <div key={i}>{m.replace('*', '')}</div>)}
              </div>
              {([
                ['Project initiation', 0, 1], ['Deliverables commencement', 2, 3], ['Portfolios', 3, 5],
                ['Sponsorship prospectus', 3, 2], ['Uniforms & pit display', 4, 4], ['Regional competition', 6, 1],
                ['2nd deliverable submission', 7, 2], ['National competition', 9, 1],
              ] as [string, number, number][]).map(([label, start, span]) => (
                <React.Fragment key={label}>
                  <div className="text-[8px] text-gray-400 leading-tight">{label}</div>
                  <div className="grid grid-cols-10 gap-0.5 h-3.5">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className={`${i >= start && i < start + span ? 'bg-gold-400' : 'bg-white/8'} border border-white/5`} />
                    ))}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </VBox>
        </Block>
      </div>

      {/* col 2 */}
      <div className="flex flex-col">
        <Block title="Budget & Resource Management" tag="Cost Control">
          <T>Effective resource management is essential for properly allocating all available funds and materials. RevolutionX identified two critical areas where to invest the bulk of its resources: the Pit Display and CNC manufacturing of the car.</T>
        </Block>
        <Block title="Budget Spend Tracking (Base vs Original)">
          <T>At the start of the journey towards nationals, the enterprise coordinator estimated the budget the team needed to buy everything required. The estimate was that approximately 1,000€ would be needed to cover all costs. After reaching those figures through sponsors and crowdfunding, the team carried out an exhaustive search for everything it wanted to purchase. The estimations were correct — the total price of all the elements purchased for the competition has been 1,033€.</T>
          <StatGrid stats={[['Estimated Budget', '1,000€'], ['Actual Spend', '1,033€'], ['Main Investments', 'Pit + CNC'], ['Cost Variance', '+3.3%', 'Within acceptable range']]} />
        </Block>
        <Block title="Revenue & Expenditure Breakdown">
          <Table
            headers={['Revenue Source', 'Amount', '% of total']}
            columns="1.2fr 0.7fr 0.7fr"
            rows={[
              ['Monetary sponsors (5)', '625€', '50%'],
              ['GoFundMe crowdfunding', '625€', '50%'],
              ['Material sponsors (3)', 'In-kind', '—'],
              ['Total revenue', '1,250€', '100%'],
            ]}
          />
          <Table
            headers={['Expenditure Area', 'Amount', '% of spend']}
            columns="1.2fr 0.7fr 0.7fr"
            rows={[
              ['Pit display', '423€', '41%'],
              ['CNC car manufacturing', '250€', '24%'],
              ['Materials & components', '220€', '21%'],
              ['Other (printing, events)', '140€', '14%'],
              ['Total expenditure', '1,033€', '100%'],
            ]}
          />
        </Block>
        <VBox title="Cashflow Position">
          <div className="space-y-1.5">
            {[['Revenue', '1,250€', 'w-full'], ['Expenditure', '1,033€', 'w-[83%]'], ['Surplus', '217€', 'w-[17%]']].map(([n, v, w]) => (
              <div key={n}>
                <div className="flex justify-between text-[9px] text-gray-400 mb-0.5"><span>{n}</span><span>{v}</span></div>
                <div className="h-3 bg-white/10"><div className={`h-full bg-gold-400 ${w}`} /></div>
              </div>
            ))}
          </div>
        </VBox>
      </div>

      {/* col 3 */}
      <div className="flex flex-col">
        <Block title="Resource Management Detail">
          <Table
            headers={['Resource Category', 'Management Decision']}
            columns="1fr 1.6fr"
            rows={[
              ['Pit Display', '4 canvas panels + posters ordered early; time buffer built in for printing errors'],
              ['CNC Manufacturing', '3D-printed backup design prepared in case of milling failure'],
              ['Sponsors', '5 monetary sponsors (625€) + 3 material sponsors secured via 3-step outreach process'],
              ['Crowdfunding', 'GoFundMe campaign raised 625€ from 14 donations on GoFundMe platform'],
            ]}
          />
        </Block>
        <Block title="Schedule Management">
          <T>RevolutionX tracked its schedule using a Gantt chart updated roughly every month to ensure consistent organisation. The chart was the single source of truth for start dates, end dates, and task durations across all deliverables.</T>
          <T>Two submission milestones structured the timeline: a first submission in April 2026 covering the Engineering Portfolio, car, sponsorship prospectus, and uniforms; and a second submission in June 2026 covering the Enterprise Portfolio and pit display. Both milestones were met on time, with no significant delays reported across the season.</T>
          <T>The main scheduling risk — missing task deadlines due to limited school working time (~1 hour/day) — was mitigated by building a time buffer into every deliverable and prioritising tasks monthly using ClickUp.</T>
        </Block>
        <Block title="Cost & Revenue Variance">
          <Table
            headers={['Metric', 'Predicted', 'Actual', 'Variance']}
            columns="0.9fr 0.7fr 0.7fr 0.8fr"
            rows={[
              ['Expenditure', '~1,000€', '1,033€', '+33€ (+3.3%)'],
              ['Sponsor revenue', '~1,000€', '625€', '-375€'],
              ['Crowdfunding', '0€', '625€', '+625€'],
              ['Net surplus', '0€', '217€', '+217€'],
            ]}
          />
        </Block>
      </div>
    </div>
  </Page>
);

/* ═══════════════ PAGE 3 — ROLES & RESPONSIBILITIES ═══════════════ */

const Page3: React.FC = () => (
  <Page title="Roles & Responsibilities" page={3} ghost="TEAM">
    <div className="grid grid-cols-3 gap-5 h-full">
      {/* col 1 */}
      <div className="flex flex-col">
        <Block title="Team Structure" tag="Dual Coordination">
          <T>One of the key factors in our success as a team has been designating two project coordinators — one focused on engineering and another on business management. This organizational structure allowed us to maintain better oversight and coordination. It is important to highlight that our team comprises highly versatile students, which enables seamless collaboration and cross-functional support. Additionally, we have been fortunate to have the dedication of student volunteers who, despite knowing they could not officially compete since all positions were already filled, generously offered to contribute to our project.</T>
        </Block>
        <Block title="Team Members">
          <Table
            headers={['Member', 'Role', 'Skills', 'Knowledge']}
            columns="0.9fr 1.15fr 1.3fr 1.3fr"
            rows={[
              ['Saúl Morán', 'Team Coordinator', 'Excel, Canva, GIMP, ClickUp', 'Finance, organisation, graphic design'],
              ['Martín Cendra', 'Team Manager', 'Fusion 360, Antigravity, VS Code', 'AI usage, programming, engineering'],
              ['Martina Corredor', 'Strategy, Eng. & External Rel.', 'Canva, SimScale, Prezi', 'Graphic design, communication, eng.'],
              ['Víctor Jiménez', 'Design Engineer', 'Fusion 360, DaVinci Resolve', 'Engineering, aerodynamics, 3D printing'],
              ['Yago Álvarez', 'Communication & Social Media', 'BeFunky, Instagram, Prezi, Canva, CapCut', 'Communication, graphic design, video editing'],
              ['Álvaro Cardona', 'Manufacturing Engineer', 'Fusion 360, Ansys, Blender', 'Aerodynamics, simulation, 3D printing, eng.'],
              ['Claudia de Paz', 'Business Mgmt. Assistant', 'Canva, BeFunky', 'Communication, graphic design'],
              ['Ibrahim Aharrar', 'Engineering Assistant', 'Fusion 360', 'Engineering, aerodynamics'],
            ]}
          />
        </Block>
        <StatGrid stats={[['Core team', '6'], ['Assistants', '2'], ['Coordinators', '2'], ['Structure', 'Dual']]} />
        <VBox title="Team Photo">
          <img src="/assets/boceto/p08_01.jpg" alt="RevolutionX team" className="w-full h-36 object-contain" />
        </VBox>
      </div>

      {/* col 2 */}
      <div className="flex flex-col">
        <Block title="Role Descriptions" tag="Accountability">
          <T>It is vital to understand that, although we are a highly collaborative team working shoulder to shoulder, clearly defined roles are essential to specializing in specific work and contributing to both personal and collective development. When defining each team member's role, their proficiency with different software and applications, as well as their knowledge in various sectors, were the key criteria we used to individually and collectively determine what responsibilities each person would undertake.</T>
          <MiniCard title="Team Coordinator — Saúl Morán">To find a team coordinator capable of organizing RevolutionX's business management tasks, we sought someone with the ability to lead and break down large projects into smaller, manageable tasks assigned to different team members. Saúl perfectly embodies these characteristics. His excellent organizational skills enable the team to divide tasks effectively and complete all objectives. Additionally, he is responsible for managing the team's finances and accounts.</MiniCard>
          <MiniCard title="Team Manager — Martín Cendra">RevolutionX has an organizer in each sector. Martín, as team manager and head of engineering, performs different responsibilities than Saúl, who oversees business management. Martín, using tools such as Antigravity, designed our website. Additionally, he is responsible for organizing the design and testing plans for the engineering team members.</MiniCard>
          <MiniCard title="Strategy, Engineering & Design — Martina Corredor">At RevolutionX, we saw it as essential to have a team member who could adapt to both sectors, possessing knowledge in both engineering and graphic design. Martina exceeds these expectations. In addition to assisting the engineers in conducting simulation tests, she has been responsible for contacting external companies that could be potential sponsors, as well as reaching out to media outlets such as RTVE, El Mundo, and El Español, where we now have several published articles.</MiniCard>
        </Block>
        <VBox title="Organisational Chart">
          <img src="/assets/boceto/p09_01.png" alt="Team organisational chart" className="w-full h-28 object-contain" />
        </VBox>
      </div>

      {/* col 3 */}
      <div className="flex flex-col">
        <Block title="Role Descriptions (continued)">
          <MiniCard title="Design Engineer — Víctor Jiménez">The design engineer is, if not the most, one of the most crucial pieces of the team's engineering, as he is the one who brings the car to life. Víctor has been RevolutionX's design engineer for two years and has already established himself as one of the best participants in the competition, where last year he created Spain's fastest Entry car. This year, with a completely new car designed based on Professional class specifications, he will strive for the same results.</MiniCard>
          <MiniCard title="Communication & Social Media — Yago Álvarez">From our team's perspective, we have seen having an excellent communicator as a cornerstone of success. Yago is the right person for this role, as his exceptional communication skills enable him to perform exceptionally on competition day. Beyond this, he is responsible for all content creation on our Instagram account, where he designs the vast majority of our posts.</MiniCard>
          <MiniCard title="Manufacturing Engineer — Álvaro Cardona">Álvaro performs simulation work. He has been the lead responsible for one of our most important projects, our wind tunnel. Thanks to this incredible creation, we have been able to conduct more realistic aerodynamic testing.</MiniCard>
          <MiniCard title="Assistants — Claudia de Paz & Ibrahim Aharrar">Claudia supports business management with communication and graphic design tasks. Ibrahim supports engineering and aerodynamics work, particularly through Fusion 360 knowledge.</MiniCard>
        </Block>
        <Block title="RACI Chart" tag="Task Matrix">
          <T>The RACI (Responsible, Accountable, Consulted & Informed) is a matrix that allows us to visualize how each team member has participated in all tasks. Our RACI has been modified to include only three categories: Responsible, Informed, and Excluded.</T>
          <Table
            headers={['Department', 'Responsible', 'Informed', 'Excluded']}
            columns="0.8fr 1.3fr 1fr 0.8fr"
            rows={[
              ['Sponsorship', 'Saúl, Martina, Claudia', 'Coordinators, sponsors', 'Eng. assistants'],
              ['Engineering', 'Martín, Víctor, Álvaro, Ibrahim', 'Business team, mentor', 'Biz. assistants'],
              ['Publicity', 'Yago, Martina, Claudia', 'Sponsors, followers', 'Eng. team'],
              ['Documents', 'Saúl, Martín, Martina, Yago', 'All members', '—'],
              ['Pit display', 'Saúl, Martina, Claudia', 'Engineering team', '—'],
              ['Finance', 'Saúl, Martín', 'All members', '—'],
            ]}
          />
        </Block>
      </div>
    </div>
  </Page>
);

/* ═══════════════ PAGE 4 — COMMUNICATIONS & RISK ═══════════════ */

const Page4: React.FC = () => (
  <Page title="Communications & Risk Mgmt." page={4} ghost="STAKEHOLDERS">
    <div className="grid grid-cols-3 gap-5 h-full">
      {/* col 1 */}
      <div className="flex flex-col">
        <Block title="Stakeholder Register" tag="Identification">
          <T>A stakeholder is any person, group, or organization that has an interest in or is affected by a project. It is essential to identify your project's stakeholders to ensure better communication. In fact, this was the exact first step our team took for our communication strategy: identifying all of our stakeholders. After some brief research and analysis, we concluded that we had 9 stakeholders: the team coordinators, the team members, our mentor, the press, the competition judges, our followers, the members of Nova Alliance (our international alliance), and Owla (who co-founded Nova Alliance alongside us).</T>
          <Table
            headers={['Stakeholder', 'Type', 'Why They Matter']}
            columns="0.75fr 0.55fr 1.7fr"
            rows={[
              ['Coordinators', 'Internal', 'Control project direction, tasks and budgets'],
              ['Team members', 'Internal', 'Execute deliverables; need daily operational detail'],
              ['Mentor', 'Internal', 'Advises scope, engineering and project decisions'],
              ['Press', 'External', 'Amplifies visibility and brand awareness'],
              ['Judges', 'External', 'Assess the final project at competition'],
              ['Followers', 'External', 'Provide community visibility and engagement'],
              ['Nova Alliance', 'External', 'Support international collaboration'],
              ['Owla', 'External', 'Co-founded Nova Alliance with RevolutionX'],
              ['Sponsors', 'External', 'Provide resources; require clear ROI communication'],
            ]}
          />
        </Block>
        <Block title="Communication Tools">
          <T>Knowing how to identify the strengths of each communication tool and matching them to specific stakeholders is important, as it ensures that every stakeholder feels comfortable communicating with your team.</T>
          <Table
            headers={['Tool', 'Stakeholders', 'Frequency']}
            columns="0.65fr 1.7fr 0.65fr"
            rows={[
              ['WhatsApp', 'Team members, coordinators, sponsors', 'Daily'],
              ['Telegram', 'Team members, coordinators, mentor, Owla', 'Weekly'],
              ['Instagram', 'Followers, sponsors, members of Nova Alliance', 'Monthly'],
              ['Gmail', 'Team members, coordinators, mentor, sponsors', 'Weekly'],
              ['ClickUp', 'Team coordinators', 'Weekly'],
            ]}
          />
        </Block>
        <VBox title="Communication in Action">
          <div className="grid grid-cols-2 gap-2">
            <img src="/assets/boceto/p12_01.png" alt="Communication tool 1" className="w-full h-24 object-contain" />
            <img src="/assets/boceto/p12_02.png" alt="Communication tool 2" className="w-full h-24 object-contain" />
          </div>
        </VBox>
      </div>

      {/* col 2 */}
      <div className="flex flex-col">
        <Block title="Communication Plans">
          <T>RevolutionX has designed a communication plan that outlines the type of relationship maintained with each stakeholder. Internal communication focuses on coordination and execution; external communication focuses on visibility, partnership and alliance management.</T>
        </Block>
        <Block title="Internal Communication">
          <Table
            headers={['Audience', 'Information Communicated', 'Frequency']}
            columns="0.75fr 1.7fr 0.65fr"
            rows={[
              ['Team members', 'Project details, timelines, scope, budget', 'Daily'],
              ['Coordinators', 'Project details, timelines, scope, budget', 'Weekly'],
              ['Mentor', 'Project details, scope, budget', 'Weekly'],
            ]}
          />
        </Block>
        <Block title="External Communication">
          <Table
            headers={['Audience', 'Information Communicated', 'Frequency']}
            columns="0.75fr 1.7fr 0.65fr"
            rows={[
              ['Sponsors', 'Project details, budget', 'Quarterly'],
              ['Owla', 'Nova Alliance details and management', 'Monthly'],
              ['Nova Alliance', 'Nova Alliance details', 'Monthly'],
              ['Followers', 'Instagram posts', 'Monthly'],
            ]}
          />
        </Block>
        <VBox title="Communication Frequency Map">
          <div className="grid grid-cols-2 gap-2">
            {[['Daily execution', 'WhatsApp — Team coordination'], ['Weekly control', 'Telegram / ClickUp — Progress review'], ['Monthly visibility', 'Instagram — Brand presence'], ['Quarterly sponsors', 'Gmail — ROI & project updates']].map(([title, desc]) => (
              <div key={title} className="border border-gold-400/25 bg-gold-400/8 p-2">
                <div className="text-gold-400 font-black text-[9px] uppercase">{title}</div>
                <div className="text-[8.5px] text-gray-300 mt-0.5">{desc}</div>
              </div>
            ))}
          </div>
        </VBox>
      </div>

      {/* col 3 */}
      <div className="flex flex-col">
        <Block title="Risk Identification, Planning, Analysis & Assessment" tag="Proactive Approach">
          <T>One of the biggest challenges we have faced as a team has been identifying our risks and errors, and determining how to manage them properly. To address this, we anticipated mistakes in advance, building in a solid margin of both time and budget to quickly resolve any potential setbacks. Furthermore, we used the main issues we encountered during the regional competition as a reference to prevent them from happening at the national finals. Naturally, these risks have impacted every area of our project, from car manufacturing to the pit display.</T>
        </Block>
        <Block title="Engineering Risks">
          <Table
            headers={['Risk', 'Identified Issue', 'Solution']}
            columns="0.8fr 1.25fr 1.4fr"
            rows={[
              ['Car Protection', 'Potential car breakage before competition', 'Purchase a padded case'],
              ['Sticker Dims', 'Missing or incorrect sticker dimensions on car', 'Verify in Fusion 360; use multiple sketches with different sizes'],
              ['Car Production', 'Potential car breakage during CNC milling', 'Have a 3D-printed backup design ready'],
              ['Simulations', 'Not being ready in time for Eng. Portfolio', 'Prioritise simulations over secondary tasks'],
              ['Car Weight', 'Excessively high weight (as at nationals)', 'Purchase lower-density bearings'],
            ]}
          />
        </Block>
      </div>
    </div>
  </Page>
);

/* ═══════════════ PAGE 5 — RISK ASSESSMENT & MONITORING ═══════════════ */

const PIMMatrix: React.FC = () => {
  const vals = [[0,0,0,0,0,0],[0,.04,.08,.12,.16,.20],[0,.08,.16,.24,.32,.40],[0,.12,.24,.36,.48,.60],[0,.16,.32,.48,.64,.80],[0,.20,.40,.60,.80,1]];
  const lbl = ['0.00','0.20','0.40','0.60','0.80','1.00'];
  const clr = (v: number) => v >= .41 ? 'bg-red-900/60 text-red-300' : v >= .21 ? 'bg-yellow-900/50 text-yellow-300' : v > 0 ? 'bg-green-900/50 text-green-300' : 'bg-white/5 text-gray-600';
  return (
    <VBox title="Probability & Impact Matrix (PIM)">
      <div className="grid grid-cols-[40px_repeat(6,1fr)] gap-[1px]">
        <div className="text-[7px] text-gray-500 flex items-end justify-center pb-0.5">P \ I</div>
        {lbl.map((l) => <div key={l} className="text-[7px] text-gray-400 text-center font-black">{l}</div>)}
        {vals.map((row, ri) => (
          <React.Fragment key={ri}>
            <div className="text-[7px] text-gray-400 text-center font-black flex items-center justify-center">{lbl[ri]}</div>
            {row.map((v, ci) => (
              <div key={ci} className={`text-[7px] text-center py-0.5 ${clr(v)}`}>{v.toFixed(2)}</div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="flex gap-4 mt-1.5 text-[7.5px]">
        <span className="text-green-400">■ Low: 0.00–0.20</span>
        <span className="text-yellow-400">■ Medium: 0.21–0.40</span>
        <span className="text-red-400">■ High: 0.41–1.00</span>
      </div>
    </VBox>
  );
};

const Page5: React.FC = () => (
  <Page title="Risk Assessment & Monitoring" page={5} ghost="CONTROL">
    <div className="grid grid-cols-3 gap-5 h-full">
      {/* col 1 */}
      <div className="flex flex-col">
        <Block title="Risks">
          <Table
            headers={['Risk', 'Identified Issue', 'Solution']}
            columns="0.85fr 1.25fr 1.4fr"
            rows={[
              ['Sponsors', 'Not enough sponsors for the competition', 'Turn to closer, more accessible sponsors to ensure a strong brand identity'],
              ['Brand Awareness', 'Not promoting brand enough to be recognised', 'Highlight logo on pit display, get in newspapers, attend STEM Racing events (Cupra City Garage, etc.)'],
              ['Budget', 'Not enough funding for the project', 'Maintain organisational budget tracking with available and required funds'],
              ['Element Deadlines', 'Not having all pit display elements ready on time', 'Order elements as early as possible and build a time buffer in case of printing errors'],
              ['Poster Resolution', 'Printed posters having low resolution', 'Consult the printing company for feedback and adjust files if any issues appear'],
            ]}
          />
        </Block>
        <Block title="Risk Areas of Impact" tag="Impact Classification">
          <T>Each risk was categorised by its area of project impact: resources, schedule, scope and quality. The deliverables affected by each risk event were also mapped.</T>
          <Table
            headers={['Risk', 'Resources', 'Schedule', 'Scope', 'Quality', 'Deliverables']}
            columns="0.85fr 0.5fr 0.5fr 0.45fr 0.45fr 0.85fr"
            rows={[
              ['Car protection', '●', '●', '—', '●', 'Car'],
              ['Car production', '●', '●', '—', '●', 'Car'],
              ['Car weight', '●', '—', '●', '●', 'Car'],
              ['Sticker dims', '—', '●', '—', '●', 'Car livery'],
              ['Simulations', '—', '●', '●', '●', 'Eng. Portfolio'],
              ['Sponsors', '●', '—', '—', '—', 'Budget'],
              ['Brand awareness', '—', '—', '●', '●', 'Pit display'],
              ['Budget', '●', '●', '●', '—', 'All deliverables'],
              ['Element deadlines', '—', '●', '—', '●', 'Pit display'],
              ['Poster resolution', '—', '●', '—', '●', 'Posters'],
            ]}
          />
          <Tiny>Fill in ● for concerned areas of impact.</Tiny>
        </Block>
        <PIMMatrix />
      </div>

      {/* col 2 */}
      <div className="flex flex-col">
        <Block title="Response Strategy" tag="Tiered Response">
          <T>The risk response plan can be segmented by assessed threat level. High-threat risks require both mitigation and avoidance strategies. Medium-threat risks target either probability or impact. Low-threat risks receive a single response strategy.</T>
          <Table
            headers={['Level', 'Count', 'Strategy', 'Example']}
            columns="0.45fr 0.4fr 0.95fr 1.4fr"
            rows={[
              ['High', '2', 'Mitigate + Avoid', 'Car production: 3D backup ready'],
              ['Medium', '4', 'Avoid OR Mitigate', 'Budget: crowdfunding campaign'],
              ['Low', '4', 'Single response', 'Poster resolution: consult print company'],
            ]}
          />
        </Block>
        <Block title="Monitoring & Controlling" tag="Status Reports">
          <T>A status report is a monthly review of completed and pending tasks, allowing us to maintain consistent project organization. Our Enterprise Coordinator has been preparing a monthly status report following a standardised structure:</T>
          <Table
            headers={['Section', 'Content', 'Purpose']}
            columns="0.7fr 1.3fr 1fr"
            rows={[
              ['Abstract', 'General month summary and key team achievements', 'High-level view for coordinators'],
              ['Resources', 'Budget consumed vs available; sponsor/crowdfunding updates', 'Ensure funds are on track'],
              ['Schedule', 'Completed vs planned tasks based on Gantt', 'Detect delays early'],
              ['Scope creep', 'Activities identified outside the original scope statement', 'Prevent uncontrolled expansion'],
              ['Task sign-offs', 'Tasks formally approved by department coordinator', 'Ensure quality gate is met'],
              ['Concerns', 'Issues or blockers requiring next-month attention', 'Proactive risk management'],
            ]}
          />
        </Block>
        <Block title="Scope Creep Management">
          <T>Scope creep is the uncontrolled expansion of project scope. RevolutionX identified it by auditing team member activities on a monthly basis against the scope statement.</T>
          <VBox title="Scope Creep Action Plan">
            <div className="space-y-1">
              {[['1. Detect', 'Identify activities not included in original scope statement via monthly audit'], ['2. Assess', 'Evaluate impact on timeline, budget, and quality of deliverables'], ['3. Decide', 'Accept into scope (amend WBS) or eliminate the out-of-scope activity'], ['4. Control', 'Document the decision and update WBS and Gantt accordingly']].map(([s, d]) => (
                <div key={s} className="grid grid-cols-[65px_1fr] gap-1.5 border border-gold-400/20 bg-black/60 p-1">
                  <div className="text-gold-400 font-black text-[8.5px]">{s}</div>
                  <div className="text-gray-300 text-[8.5px] leading-tight">{d}</div>
                </div>
              ))}
            </div>
          </VBox>
        </Block>
      </div>

      {/* col 3 */}
      <div className="flex flex-col">
        <Block title="Control Artifacts Summary">
          <Table
            headers={['Artifact', 'Purpose', 'Frequency', 'Owner']}
            columns="0.9fr 1.3fr 0.6fr 0.8fr"
            rows={[
              ['Status report', 'Monthly project health review', 'Monthly', 'Saúl (Coord.)'],
              ['Budget tracking', 'Actual vs estimated spend', 'Weekly', 'Saúl'],
              ['Schedule updates', 'Gantt revision & milestone tracking', 'Monthly', 'Saúl / Martín'],
              ['Risk register', 'Identify and monitor active risks', 'Monthly', 'Coordinators'],
              ['Issue log', 'Track and resolve active issues', 'Ongoing', 'Coordinators'],
              ['Scope audit', 'Review activities vs scope statement', 'Monthly', 'Coordinators'],
            ]}
          />
        </Block>
        <Block title="Issue Log">
          <Table
            headers={['Issue', 'Status', 'Resolution']}
            columns="1.1fr 0.5fr 1.5fr"
            rows={[
              ['Car weight too heavy at regionals', 'Resolved', 'Purchased lower-density bearings'],
              ['Insufficient initial funding from sponsors', 'Resolved', 'GoFundMe campaign raised 625€'],
              ['Incorrect sticker dimensions on car', 'Resolved', 'Verified in Fusion 360 with multiple sketches'],
              ['Simulations delayed vs portfolio deadline', 'Resolved', 'Prioritised over secondary tasks'],
            ]}
          />
        </Block>
        <Block title="Task Sign-Off Process">
          <T>Once the relevant department coordinator approves a task, it is signed off and added to the completed activities list. Sign-offs are documented in a colour-coded WBS.</T>
          <div className="flex gap-2 mt-1 mb-2">
            {[['Completed', 'bg-green-800/60 border-green-600/40'], ['Active', 'bg-yellow-800/50 border-yellow-600/40'], ['Not started', 'bg-blue-900/50 border-blue-600/40']].map(([label, cls]) => (
              <div key={label} className={`border ${cls} px-2.5 py-1 text-[9px] text-gray-300`}>{label}</div>
            ))}
          </div>
        </Block>
        <StatGrid stats={[['Report cycle', 'Monthly'], ['Risk areas', '3'], ['Active issues', '0'], ['Source lesson', 'Regional competition']]} />
      </div>
    </div>
  </Page>
);

/* ═══════════════ PAGE 6 — TEAM IDENTITY ═══════════════ */

const Page6: React.FC = () => (
  <Page title="Team Identity" page={6} ghost="BRAND">
    <div className="grid grid-cols-3 gap-5 h-full">
      {/* col 1 */}
      <div className="flex flex-col">
        <Block title="Name" tag="Brand Foundation">
          <T>Choosing a team name is one of the first steps in developing a brand identity. When deciding on a name, we wanted it to be in English to maintain an international appeal. This ensures that if we qualify for the World Finals, we won't need to rebrand.</T>
          <T>Our final choice was "RevolutionX". This name is divided into two main parts. The first is the core word, "Revolution". By choosing this word, we play with its double meaning: it can represent a revolution in the sense of modernity and change, or it can refer to the revolutions (RPM) made by a car's wheels. To give the name a unique edge, we added a capital "X" at the end, which provides a modern and alternative touch.</T>
        </Block>
        <Block title="Colour Scheme" tag="Visual Identity">
          <T>Colours are very important for every brand, as they are what make the public remember you. RevolutionX hit the mark with its colour scheme: black and gold. These colours represent elegance and professionalism and, moreover, are totally distinguishable. Thanks to our colours, people remember us. For graphic elements like the logo, we use a gradient of gold tones to add a bright touch, blending a dark gold with a lighter gold.</T>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="h-20 bg-black border border-gold-400/40 p-2 flex flex-col justify-end">
              <div className="text-[9px] uppercase text-white font-black">Black</div>
              <div className="text-[7.5px] text-gray-400">#000000</div>
            </div>
            <div className="h-20 bg-gold-400 border border-gold-400/40 p-2 flex flex-col justify-end">
              <div className="text-[9px] uppercase text-black font-black">Gold</div>
              <div className="text-[7.5px] text-black/60">#D4AF37</div>
            </div>
            <div className="h-20 border border-gold-400/40 p-2 flex flex-col justify-end" style={{ background: 'linear-gradient(135deg, #8f6d10, #f5d76e)' }}>
              <div className="text-[9px] uppercase text-black font-black">Gold Gradient</div>
              <div className="text-[7.5px] text-black/60">Dark → Light</div>
            </div>
          </div>
        </Block>
        <Block title="Application to Deliverables">
          <Table
            headers={['Deliverable', 'Logo Use', 'Colour Scheme']}
            columns="0.85fr 1.2fr 1fr"
            rows={[
              ['Car livery', 'Gold gradient logo on car surface', 'Black/gold throughout'],
              ['Uniforms', 'Logo (front) + sponsor logos (back)', 'Black polo with gold shoulder stripes'],
              ['Portfolios', 'Logo on cover, gold section headers', 'Gold accents on black/dark background'],
              ['Pit display', 'Full-size logo on 4 canvas panels', 'Dominant black/gold branding'],
              ['Social media', 'Logo as profile picture on Instagram', 'Consistent black/gold visual tone'],
            ]}
          />
        </Block>
        <VBox title="Colour Scheme in Practice">
          <img src="/assets/boceto/p16_01.jpg" alt="RevolutionX colour scheme applied" className="w-full h-40 object-contain" />
        </VBox>
      </div>

      {/* col 2 */}
      <div className="flex flex-col">
        <Block title="Logo" tag="Primary Brand Asset">
          <T>Our logo is one of the graphic elements we prioritized most throughout the development of our brand identity. After numerous sketches, we arrived at the design that is now our official logo. It features a tire-shaped circle with our name placed directly in the center. Additionally, the logo can be displayed either with a solid black background or with a transparent background.</T>
          <div className="grid grid-cols-2 gap-3 mb-2">
            <VBox title="Logo — Black Background" className="flex items-center justify-center min-h-[160px]">
              <img src="/assets/boceto/p19_01.png" alt="RevolutionX logo with background" className="max-h-[140px] object-contain mx-auto" />
            </VBox>
            <VBox title="Logo — Transparent" className="flex items-center justify-center min-h-[160px]">
              <img src="/assets/boceto/p19_02.png" alt="RevolutionX logo without background" className="max-h-[140px] object-contain mx-auto" />
            </VBox>
          </div>
          <T>The tyre shape pays homage to the racing heritage of the team. The circular form represents forward-thinking, simplistic design — like a car wheel rolling forward. The RevolutionX wordmark ensures the brand is instantly recognisable even at small scales.</T>
          <Tiny>Throughout developmental iterations, the basis of the logo remained: a geometrically concise roundel. The font was chosen to complement the round, modern logo with a matching rounded typeface.</Tiny>
        </Block>
        <VBox title="Logo Development Process">
          <div className="grid grid-cols-2 gap-2">
            <img src="/assets/boceto/p17_01.png" alt="Logo iteration 1" className="w-full h-28 object-contain bg-black" />
            <img src="/assets/boceto/p17_02.png" alt="Logo iteration 2" className="w-full h-28 object-contain bg-black" />
          </div>
        </VBox>
      </div>

      {/* col 3 */}
      <div className="flex flex-col">
        <Block title="Uniform" tag="Competition Wear">
          <T>When deciding on the design of our uniforms, we wanted something simple yet representative of our brand. Our first decision was choosing the type of shirt. We opted for a polo shirt, as we found it to be the perfect blend of professionalism and comfort. As for the design, as mentioned earlier, we kept it simple: black with gold stripes on the shoulders. It is important to note that the shirts were produced by one of our sponsors, who provided the manufacturing service free of charge.</T>
          <VBox title="Uniform Design System">
            <div className="grid grid-cols-2 gap-3">
              <div className="h-48 border border-gold-400/25 bg-[#111] relative overflow-hidden">
                <div className="absolute left-1/2 top-4 -translate-x-1/2 w-24 h-32 bg-[#191919] rounded-t-[28px] border border-gray-700" />
                <div className="absolute left-[62px] top-9 w-20 h-3 bg-gold-400 rotate-[-22deg]" />
                <div className="absolute right-[62px] top-9 w-20 h-3 bg-gold-400 rotate-[22deg]" />
                <div className="absolute left-1/2 top-16 -translate-x-1/2 text-gold-400 text-[10px] font-black">RX</div>
                <div className="absolute bottom-3 left-0 right-0 text-center text-[8px] text-gray-400 uppercase">Front: Black Polo + Gold Shoulders</div>
              </div>
              <div className="h-48 border border-gold-400/25 bg-[#111] relative overflow-hidden">
                <div className="absolute left-1/2 top-4 -translate-x-1/2 w-24 h-32 bg-[#191919] rounded-t-[28px] border border-gray-700" />
                <div className="absolute left-1/2 top-14 -translate-x-1/2 text-white text-[10px] font-black tracking-wide">REVOLUTIONX</div>
                <div className="absolute left-1/2 top-20 -translate-x-1/2 text-gold-400 text-[8px] uppercase">Member Role</div>
                <div className="absolute left-1/2 top-[100px] -translate-x-1/2 w-12 h-8 border border-gray-600 flex items-center justify-center text-[6px] text-gray-500">SPONSOR</div>
                <div className="absolute bottom-3 left-0 right-0 text-center text-[8px] text-gray-400 uppercase">Back: Name + Sponsor ROI Visibility</div>
              </div>
            </div>
          </VBox>
          <T>Each uniform includes the individual member's name and role so that the audience and competition officials can easily distinguish the different members of the team. Sponsor logos are positioned on the back to provide return on investment visibility. The uniforms were also designed to be suitable for the competition climate.</T>
        </Block>
        <VBox title="Uniform Reference">
          <img src="/assets/boceto/p18_01.png" alt="RevolutionX uniform" className="w-full h-32 object-contain" />
        </VBox>
      </div>
    </div>
  </Page>
);

/* ═══════════════ PAGE 7 — MARKETING ═══════════════ */

const Page7: React.FC = () => (
  <Page title="Marketing" page={7} ghost="GROWTH">
    <div className="grid grid-cols-3 gap-5 h-full">
      {/* col 1 */}
      <div className="flex flex-col">
        <Block title="Marketing Goals" tag="Strategic Objectives">
          <T>Before beginning the execution of our marketing projects, our first step was to establish the objectives we wanted to achieve with each task. This ensured our work remained highly focused on meeting those goals and kept us from straying off track.</T>
          <List items={[
            <><strong className="text-gold-400">Goal 1:</strong> Increase our project's visibility.</>,
            <><strong className="text-gold-400">Goal 2:</strong> Raise awareness about STEM Racing.</>,
            <><strong className="text-gold-400">Goal 3:</strong> Collaborate with other teams in the competition.</>,
            <><strong className="text-gold-400">Goal 4:</strong> Partner with sponsors.</>,
          ]} />
        </Block>
        <Block title="Target Audiences" tag="Market Segmentation">
          <T>The second step was to identify the specific audience we wanted to engage with each initiative.</T>
          <Table
            headers={['Target', 'Characteristics', 'Marketing Tasks', 'Expected Results']}
            columns="0.65fr 1.1fr 1fr 1fr"
            rows={[
              ['1. Students', 'Age 11–19, M/F, social media users', 'Colloquial language, Instagram posts', 'Increase participation in STEM Racing'],
              ['2. General public', 'All ages, M/F, worldwide', 'Formal language, newspaper articles', 'Increase in our visibility'],
              ['3. Potential sponsors', 'Age 25+, M/F', 'Formal language, direct email or Instagram DMs', 'Increase in our resources'],
              ['4. STEM Racing teams', 'Age 11–19, M/F', 'Colloquial language, direct comm. & collaborations', 'A community of teams for sharing questions and gaining visibility'],
            ]}
          />
        </Block>
        <Block title="Marketing Funnel" tag="Supporter Journey">
          <VBox title="Adapted Marketing Funnel">
            <div className="space-y-1.5">
              {[
                ['Awareness', 'Instagram posts, press articles, school events, Mayor visit', 'w-full'],
                ['Consideration', 'Website, sponsorship prospectus, direct outreach via email/DMs', 'w-[80%]'],
                ['Follow', 'Instagram account — 206 followers, 28 posts', 'w-[60%]'],
                ['Deep Involvement', 'Sponsors, Nova Alliance members (4 countries), school collaborators', 'w-[38%]'],
              ].map(([s, d, w]) => (
                <div key={s}>
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className={`h-2.5 bg-gold-400 ${w}`} />
                    <span className="text-gold-400 font-black text-[8.5px] uppercase whitespace-nowrap">{s}</span>
                  </div>
                  <div className="text-[8px] text-gray-400 leading-tight pl-1">{d}</div>
                </div>
              ))}
            </div>
          </VBox>
        </Block>
        <VBox title="Marketing Goals Visual">
          <img src="/assets/boceto/p20_01.png" alt="Marketing goals" className="w-full h-28 object-contain" />
        </VBox>
      </div>

      {/* col 2 */}
      <div className="flex flex-col">
        <Block title="Taking Action — Instagram" tag="Primary Digital Channel">
          <T>Goals: 1, 2, 4 & 3 (in order of importance). Target audience: 2, 3, 1 & 4.</T>
          <T>Instagram is the social media platform RevolutionX uses to share posts promoting our team and our sponsors. We also use it as a communication channel to reach out to companies and send them our sponsorship proposal. Furthermore, thanks to this platform, we successfully established our international alliance, which we discuss later on.</T>
          <T><strong className="text-gold-400">Last 90 days:</strong> 22,927 views · 2,896 accounts reached · 1,262 interactions · 235 followers · 595 profile visits.</T>
          <VBox title="Instagram Content Model">
            <div className="grid grid-cols-3 gap-2">
              {['Team & achievements', 'Sponsor features', 'Competition updates', 'Nova Alliance', 'Press coverage', 'Events & outreach'].map((item, idx) => (
                <div key={idx} className="h-14 border border-gold-400/25 bg-black flex items-center justify-center text-center text-[8.5px] text-gray-300 px-1">{item}</div>
              ))}
            </div>
          </VBox>
        </Block>
        <Block title="Taking Action — Website">
          <T>Goals: 1, 2 & 4. Target audience: 2, 1, 3 & 4.</T>
          <T>Our Engineering Coordinator designed a website that we use to share information about our team and our sponsors.</T>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <VBox title="Instagram Feed">
              <img src="/assets/boceto/p21_01.png" alt="Instagram profile" className="w-full h-28 object-contain" />
            </VBox>
            <VBox title="Website">
              <img src="/assets/boceto/p22_01.jpg" alt="RevolutionX website" className="w-full h-28 object-contain" />
            </VBox>
          </div>
        </Block>
        <Block title="Digital Channel Strategy">
          <Table
            headers={['Channel', 'Goal Priority', 'Target Priority', 'Content Type']}
            columns="0.7fr 0.7fr 0.7fr 1.2fr"
            rows={[
              ['Instagram', '1, 2, 4, 3', '2, 3, 1, 4', 'Posts, stories, reels; DMs for sponsorship outreach'],
              ['Website', '1, 2, 4', '2, 1, 3, 4', 'Team info, technical data, sponsor visibility'],
              ['Nova Alliance', '3, 2, 1', '4, 2, 1', 'Cross-team comms via Instagram and Telegram'],
              ['Press/Media', '1, 2', '2, 1, 4, 3', 'Journalist-written articles in 6+ media outlets'],
            ]}
          />
        </Block>
      </div>

      {/* col 3 */}
      <div className="flex flex-col">
        <Block title="Taking Action — Nova Alliance" tag="International Collaboration">
          <T>Goals: 3, 2 & 1. Target audience: 4, 2 & 1.</T>
          <T>Together with the Spanish team Owla, we have created a project that, although still in development, is important to mention in this portfolio. We established Nova Alliance, an international alliance made up of STEM Racing teams from around the world. The goal of this partnership is to support one another, help resolve each other's questions, and boost our collective visibility. Currently, the alliance includes the following teams:</T>
          <Table
            headers={['Team', 'Country', 'Role']}
            columns="1fr 0.7fr 0.8fr"
            rows={[
              ['RevolutionX', 'Spain', 'Co-founder'],
              ['Owla', 'Spain', 'Co-founder'],
              ['Buffalo Six', 'Mexico', 'Member'],
              ['Team Stealth', 'Wales', 'Member'],
              ['Vielox', 'Vietnam', 'Member'],
              ['Apex Elegance', 'China', 'Member'],
            ]}
          />
        </Block>
        <VBox title="Nova Alliance Visual">
          <img src="/assets/boceto/p22_02.jpg" alt="Nova Alliance teams" className="w-full h-28 object-contain" />
        </VBox>
        <Block title="Marketing Budget">
          <Table
            headers={['Channel', 'Budget', 'Strategy']}
            columns="1fr 0.6fr 1.4fr"
            rows={[
              ['Instagram ads', '0€', 'Organic only — no paid ads'],
              ['Printing', 'Incl. in pit display (423€)', 'Posters printed via main budget'],
              ['Collaborations', '0€', 'Nova Alliance — no cost, mutual benefit'],
              ['Events', '0€', 'School-organised; Mayor visit self-arranged'],
              ['Total marketing', '0€ dedicated', 'All covered within main 1,033€ budget'],
            ]}
          />
        </Block>
        <Block title="Strategy Summary">
          <List items={[
            'Instagram organic growth: 206 followers, 28 posts, international alliance reach',
            'Press outreach: featured in EL MUNDO, El Español, RNE, InfoMajadahonda and more',
            'Nova Alliance: international collaboration across 4 countries (Spain, Mexico, Wales, Vietnam, China)',
            'Events: school Open House + Mayor of Majadahonda visit generated institutional sponsorship',
          ]} />
        </Block>
      </div>
    </div>
  </Page>
);

/* ═══════════════ PAGE 8 — MEDIA, EVENTS & NOVA ALLIANCE ═══════════════ */

const Page8: React.FC = () => (
  <Page title="Media & Events" page={8} ghost="PUBLICITY">
    <div className="grid grid-cols-3 gap-5 h-full">
      {/* col 1 */}
      <div className="flex flex-col">
        <Block title="High School Open House" tag="Community Event">
          <T>Goals: 1 & 2. Target audience: 1 & 2.</T>
          <T>During our school's Open House, where many children came to explore our facilities and educational programs, we had the opportunity to introduce our STEM Racing team to them. This exposed younger students to the competition and planted the seed for future participation in STEM Racing.</T>
        </Block>
        <Block title="Newspaper Articles" tag="Press Coverage">
          <T>Goals: 1 & 2. Target audience: 2, 1, 4 & 3.</T>
          <T>Our Head of Strategy, Engineering, and External Relations managed to connect with a journalist from EL MUNDO after reaching out to several newspapers. After a few days of gathering information about our team, the journalist published an article about RevolutionX in the daily newspaper's GranMadrid section.</T>
          <T>Following this press coverage, other media outlets began showing interest in our team and project. As a result, we hosted a presentation where they had the opportunity to ask us questions. A major highlight of this event was the attendance of our local mayor, Lola Moreno, whom we discuss in the next section.</T>
        </Block>
        <Block title="Media Outlets">
          <T>RevolutionX has been featured in the following media outlets:</T>
          <div className="grid grid-cols-2 gap-2 mb-2">
            {['EL MUNDO', 'RNE (Radio Nacional)', 'El Español', 'InfoMajadahonda', 'Noroeste Madrid', 'Majadahonda Magazine'].map((m) => (
              <div key={m} className="border border-gold-400/25 bg-black/60 h-12 flex items-center justify-center text-[10px] font-black text-gray-300 text-center px-2">{m}</div>
            ))}
          </div>
          <Tiny>Additional media outlets also covered the team's journey to nationals.</Tiny>
        </Block>
        <VBox title="Press Coverage">
          <div className="grid grid-cols-2 gap-2">
            <img src="/assets/boceto/p24_01.jpg" alt="Newspaper article" className="w-full h-28 object-contain" />
            <img src="/assets/boceto/p23_01.jpg" alt="Open House event" className="w-full h-28 object-contain" />
          </div>
        </VBox>
      </div>

      {/* col 2 */}
      <div className="flex flex-col">
        <Block title="Visit by the Mayor of Majadahonda" tag="Institutional Recognition">
          <T>Goals: 4, 1 & 2. Target audience: 3 & 2.</T>
          <T>On February 24th, Lola Moreno, the mayor of Majadahonda, visited our high school along with several media outlets and Cristina Benzal (Director of Formula MadCup — STEM Racing Spain). During her visit, we delivered a presentation to discuss our team and the STEM Racing competition. Following this meeting, the city council offered to sponsor us — a direct result of the team's visibility strategy and institutional engagement work.</T>
          <Table
            headers={['Field', 'Value']}
            columns="0.8fr 1.7fr"
            rows={[
              ['Goals aligned', '4 (sponsors), 1 (visibility) & 2 (STEM Racing awareness)'],
              ['Target audience', 'Potential sponsors & general public'],
              ['Key result', 'City council sponsorship offer'],
              ['Attendees', 'Mayor, media outlets, Director of STEM Racing Spain'],
            ]}
          />
        </Block>
        <VBox title="Mayor Visit">
          <img src="/assets/boceto/p25_01.jpg" alt="Mayor of Majadahonda visit" className="w-full h-32 object-contain" />
        </VBox>
        <Block title="Public Impact Chain">
          <VBox title="From Outreach to Resources">
            <div className="space-y-1.5">
              {[
                ['Outreach', 'Contacted 7+ media outlets and the Mayor of Majadahonda via email and in-person presentation'],
                ['Coverage', 'Featured in EL MUNDO, El Español, RNE, InfoMajadahonda, Noroeste Madrid, Majadahonda Magazine'],
                ['Credibility', 'Mayor Lola Moreno visited the school; STEM Racing Spain Director Cristina Benzal attended'],
                ['Resources', 'Ayuntamiento de Majadahonda became a material sponsor (1 roll-up + institutional support)'],
              ].map(([step, detail]) => (
                <div key={step} className="grid grid-cols-[80px_1fr] gap-2 border border-gold-400/20 bg-black/60 p-2">
                  <div className="text-gold-400 font-black uppercase text-[9px]">{step}</div>
                  <div className="text-gray-300 text-[9px] leading-tight">{detail}</div>
                </div>
              ))}
            </div>
          </VBox>
        </Block>
      </div>

      {/* col 3 */}
      <div className="flex flex-col">
        <Block title="Sponsorship Overview" tag="Resources">
          <T>RevolutionX currently has 4 monetary sponsorship contributors totalling 625€ and 3 material sponsorship contributors providing 10 uniforms and 3 roll-ups.</T>
          <Table
            headers={['Sponsor Type', 'Contribution', 'Sponsors']}
            columns="0.65fr 0.85fr 2fr"
            rows={[
              ['Monetary', '625€', 'Pañalón (250€), Lorena Solutions, Moñita, Titanes, El Postrecito de Isabel'],
              ['Material', 'Uniforms + roll-ups', 'Black & White, Ayuntamiento de Majadahonda, El Postrecito de Isabel'],
            ]}
          />
          <StatGrid stats={[['Monetary sponsors', '5'], ['Material sponsors', '3'], ['Largest single', '250€', 'Pañalón'], ['Total sponsor rev.', '625€']]} />
          <SponsorLogos />
        </Block>
        <Block title="Sponsorship Strategy">
          <T>As previously mentioned, the team estimated a budget of 1,000€ to cover all expenses. The first and most obvious idea was to secure this money through sponsors, so we got to work.</T>
        </Block>
      </div>
    </div>
  </Page>
);

/* ═══════════════ PAGE 9 — SPONSORSHIP ═══════════════ */

const Page9: React.FC = () => (
  <Page title="Sponsorship" page={9} ghost="ROI">
    <div className="grid grid-cols-3 gap-5 h-full">
      {/* col 1 */}
      <div className="flex flex-col">
        <Block title="Sponsorship Recruitment" tag="Three-Phase Approach">
          <T>Our approach to securing sponsorships was based on three steps:</T>
          <T><strong className="text-gold-400">1. Initial Outreach:</strong> The first step was sending our sponsorship proposal to as many companies as possible. During this phase, most companies either did not reply or informed us that they were not interested in collaborating. We only advanced to the second step with the companies that showed genuine interest.</T>
          <T><strong className="text-gold-400">2. Nurturing Relationships:</strong> The second step focused on building relationships with these potential sponsors. In these conversations, we discussed our project, outlined the resources we needed, and so on. Once a company confirmed a sponsorship agreement with us, we moved to the final step.</T>
          <T><strong className="text-gold-400">3. Sponsorship Confirmation:</strong> The final step was the confirmation of the sponsorship. At this stage, we officially and publicly announced our partnership agreement with the respective company.</T>
        </Block>
        <VBox title="Confirmed Sponsors">
          <div className="space-y-1">
            {[
              ['Pañalón', '250€', 'Monetary + material (uniforms)'],
              ['Lorena Solutions', '140€', 'Monetary (wind tunnel)'],
              ['Moñita', '100€', 'Monetary'],
              ['Titanes', '85€', 'Monetary (t-shirt stamping)'],
              ['El Postrecito de Isabel', '50€', 'Monetary'],
              ['Black & White', 'In-kind', '10 uniforms + 2 roll-ups'],
              ['Ayto. Majadahonda', 'In-kind', '1 roll-up'],
              ['GoFundMe', '625€', 'Crowdfunding — 14 donations'],
            ].map(([name, amount, type]) => (
              <div key={name} className="grid grid-cols-[1fr_0.45fr_1.1fr] gap-1 border border-gold-400/20 bg-black/60 px-1.5 py-1">
                <div className="text-gold-400 font-black text-[8px]">{name}</div>
                <div className="text-white font-black text-[8px]">{amount}</div>
                <div className="text-gray-400 text-[7.5px] leading-tight">{type}</div>
              </div>
            ))}
          </div>
        </VBox>
        <VBox title="Sponsorship Prospectus">
          <img src="/assets/boceto/p26_01.jpg" alt="Sponsorship prospectus" className="w-full h-32 object-contain" />
        </VBox>
      </div>

      {/* col 2 */}
      <div className="flex flex-col">
        <Block title="Return on Investment (ROI)" tag="Sponsor Value">
          <T>ROI (Return on Investment) is a metric that measures the benefit gained relative to the amount invested. In our case, because we found alternative ways to secure resources — such as crowdfunding, which we discuss below — we did not take on a massive number of sponsors. This allowed us to feature every sponsor's logo on almost every team representative element (shirts, car, roll-ups, and the pit display).</T>
          <T>The size of the logos on all these items was directly proportional to how much each company contributed. This is particularly noticeable with the Pañalón logo; they contributed €250, which was our largest single sponsorship contribution.</T>
          <Table
            headers={['Visibility Channel', 'Sponsor Logo Placement', 'Audience Reach']}
            columns="0.85fr 1.2fr 0.95fr"
            rows={[
              ['Uniforms', 'Back of each of the 10 polo shirts', 'Competition attendees, judges, media'],
              ['Car livery', 'Stickers on the car surface', 'Competition track audience & judges'],
              ['Pit display', '4 canvas panels + frontal poster', 'All competition visitors at pit area'],
              ['Roll-ups', '3 roll-ups (Black & White + Ayto.)', 'Event & competition audiences'],
              ['Social media', 'Featured in Instagram posts', '206+ followers, international reach'],
              ['Press articles', 'Mentioned in 6+ media articles', 'General public — EL MUNDO, RNE, etc.'],
            ]}
          />
        </Block>
        <VBox title="Sponsor Visibility Example">
          <img src="/assets/boceto/p26_02.jpg" alt="Sponsor logos on car" className="w-full h-32 object-contain" />
        </VBox>
      </div>

      {/* col 3 */}
      <div className="flex flex-col">
        <Block title="Crowdfunding" tag="GoFundMe Campaign">
          <T>Because we saw that the money obtained solely from sponsors was not going to be enough to cover all the expenses of the expected budget, and that the process of searching for more sponsors was very long and costly, we looked for alternatives to raise funds in another way. After a brainstorming session, we found the key: crowdfunding.</T>
          <T>The next day after having this idea, RevolutionX launched its own crowdfunding campaign on the GoFundMe platform, where we asked people for 1,000€. The results were almost immediate, and although we did not reach the 1,000€ target, we raised enough money to cover all of our expenses: 625€.</T>
          <StatGrid stats={[['GoFundMe target', '1,000€'], ['Amount raised', '625€'], ['Conversion rate', '62.5%'], ['Total resources', '1,250€']]} />
        </Block>
        <VBox title="Total Funding Mix">
          <div className="space-y-2">
            {[
              ['Sponsors (monetary)', '625€ — from 5 sponsors', 'w-[50%]'],
              ['Crowdfunding (GoFundMe)', '625€ — from public donations', 'w-[50%]'],
              ['Material support', 'Uniforms + roll-ups — from 3 sponsors', 'w-[30%]'],
              ['Total project budget', '~1,250€ raised vs. 1,033€ spent', 'w-full'],
            ].map(([name, value, width]) => (
              <div key={name}>
                <div className="flex justify-between text-[9px] text-gray-400 mb-0.5"><span>{name}</span><span>{value}</span></div>
                <div className="h-3 bg-white/10"><div className={`h-full bg-gold-400 ${width}`} /></div>
              </div>
            ))}
          </div>
        </VBox>
        <div className="mt-2">
          <SponsorLogos />
        </div>
      </div>
    </div>
  </Page>
);

/* ═══════════════ PAGE 10 — SUSTAINABILITY ═══════════════ */

const Page10: React.FC = () => (
  <Page title="Sustainability" page={10} ghost="GREEN">
    <div className="grid grid-cols-3 gap-5 h-full">
      {/* col 1 */}
      <div className="flex flex-col">
        <Block title="Sustainability Overview" tag="Environmental Responsibility">
          <T>Our team considered it imperative to undertake projects that would contribute, in some capacity, to the preservation of our planet. Consequently, at RevolutionX, we dedicated our efforts to identifying environmental challenges within our immediate surroundings. We determined that the two most pressing issues requiring our intervention were the persistence of water-borne microplastics and environmental heavy metal toxicity. To address these concerns, we endeavored to contribute our share; thus, we initiated the standardization of biodegradable PLA and organized a battery collection campaign.</T>
        </Block>
        <VBox title="Two Environmental Focus Areas">
          <div className="grid grid-cols-2 gap-2">
            <MiniCard title="Microplastics">Plastic consumption leads to microplastics reaching landfills and oceans. Only 8% of plastics are recycled (Penn State, 2024). RevolutionX responded by standardising biodegradable PLA use across all 3D printing work.</MiniCard>
            <MiniCard title="Heavy Metals">Improper battery disposal contaminates soil and water with lead, mercury, cadmium, arsenic and chromium. RevolutionX responded with a school-wide battery collection campaign.</MiniCard>
          </div>
        </VBox>
        <Block title="Sustainability Strategy">
          <List items={[
            <><strong className="text-gold-400">Avoid:</strong> Minimize use of non-biodegradable plastics — switch to PLA in 3D printing for test cars and keychains</>,
            <><strong className="text-gold-400">Reuse:</strong> Team members' personal 3D printers made available to the team, reducing need for new equipment</>,
            <><strong className="text-gold-400">Dispose:</strong> ~1,000 batteries collected and delivered to the local punto limpio for safe regulated processing</>,
          ]} />
        </Block>
        <Block title="Environmental Impact Assessment">
          <Table
            headers={['Aspect', 'Environmental Impact', 'RevolutionX Response']}
            columns="0.8fr 1.2fr 1.3fr"
            rows={[
              ['3D printing', 'Microplastic generation from non-biodegradable plastic', 'Switched to biodegradable PLA filament throughout'],
              ['Batteries', 'Heavy metal contamination of soil and water', 'Collected ~1,000 batteries; delivered to punto limpio'],
              ['Plastic waste', 'Only 8% of plastics globally are recycled (Penn State, 2024)', 'PLA used: biodegradable and compostable — zero lasting footprint'],
            ]}
          />
        </Block>
      </div>

      {/* col 2 */}
      <div className="flex flex-col">
        <Block title="Biodegradable PLA" tag="Microplastics Response">
          <T>One of the most significant environmental issues facing our planet today is the presence of microplastics in our water. Plastic is one of the most widely used materials across many industries, and this massive consumption leads to microplastics ending up in landfills and, eventually, in our oceans. According to data published by Pennsylvania State University (Penn State) in their study on microplastic accumulation (Science of the Total Environment, 2024), although the amount of recycled plastic has increased since 1950, only 8% of plastics are actually recycled, with the vast majority ending up in landfills.</T>
          <VBox title="Global Plastics Management Context">
            <img src="/assets/boceto/p30_01.png" alt="Plastics waste chart" className="w-full h-44 object-contain bg-white" />
            <Tiny>Chart adapted from Penn State University — "Decadal changes in microplastic accumulation in freshwater sediments" (2024).</Tiny>
          </VBox>
          <T>Due to the environmental issues caused by plastics, we have made a conscious effort to minimize the use of non-biodegradable materials in our project. For this reason, we have increased our use of PLA, which is both biodegradable and compostable, leaving no lasting footprint on our planet.</T>
          <T>To support this initiative, several team members personally invested in 3D printers. Although intended for personal use, these printers were made available to the team to produce test cars and keychains for the day of the competition. By moving away from regular plastic use, we have ensured that our team's operations remain free from contributing to ocean microplastic pollution.</T>
        </Block>
      </div>

      {/* col 3 */}
      <div className="flex flex-col">
        <Block title="Battery Collection Campaign" tag="Heavy Metals Response">
          <T>The electronics sector is currently one of the largest sources of environmental pollution. According to the systematic review published in the International Journal of Environmental Research and Public Health, electronic waste — which includes components like batteries — contains hazardous materials that, if not managed correctly, severely contaminate the environment. The primary issue is that these components often end up in illegal landfills or are improperly processed, leading to the leaching of heavy metals such as lead, mercury, cadmium, arsenic, and chromium into soil and water.</T>
          <T>In response to this global challenge, RevolutionX launched a battery collection campaign at our high school. We successfully collected approximately 1,000 batteries, which were then delivered to our local municipal waste management center (punto limpio) to ensure they are processed according to safety regulations, thereby preventing them from harming the ecosystem.</T>
          <StatGrid stats={[['Batteries collected', '~1,000'], ['Material focus', 'PLA'], ['Plastic recycle rate', '8%', 'Penn State, 2024'], ['Hazard controlled', 'Heavy metals']]} />
        </Block>
        <VBox title="Battery Collection Campaign">
          <img src="/assets/boceto/p28_01.jpg" alt="Battery collection" className="w-full h-32 object-contain" />
        </VBox>
        <Block title="Sustainability Goals Alignment">
          <Table
            headers={['Dimension', 'Goal', 'Action Taken', 'Status']}
            columns="0.7fr 0.9fr 1.4fr 0.45fr"
            rows={[
              ['Environmental', 'Reduce microplastic pollution', 'Switched all 3D printing to biodegradable PLA', '✓'],
              ['Environmental', 'Prevent heavy metal contamination', 'Battery collection campaign at IES José Saramago', '✓'],
              ['Environmental', 'Minimise plastic waste in project', 'PLA is compostable — no lasting environmental footprint', '✓'],
              ['Social', 'Raise awareness at school', 'Battery campaign collected ~1,000 units from students', '✓'],
              ['Social', 'Promote STEM education', 'Open House, press articles, and Mayor visit', '✓'],
              ['Economic', 'Manage project within budget', 'Spent 1,033€ vs 1,000€ estimate (+3.3% variance)', '✓'],
              ['Economic', 'Diversify funding sources', 'Sponsors (625€) + GoFundMe crowdfunding (625€)', '✓'],
            ]}
          />
        </Block>
        <Block title="Portfolio Completion">
          <Tiny>RevolutionX · STEM Racing 2025/2026 · Enterprise Portfolio · National Finals Edition</Tiny>
        </Block>
      </div>
    </div>
  </Page>
);

/* ═══════════════ SHELL ═══════════════ */

const PrintButton: React.FC = () => (
  <div className="fixed bottom-8 right-8 z-50 no-print">
    <button onClick={() => window.print()} className="bg-gold-400 hover:bg-gold-500 text-black font-black text-sm px-5 py-3 shadow-2xl transition-all" title="Export as PDF">Export PDF</button>
  </div>
);

const App: React.FC = () => (
  <>
    <style>{`
      @media print {
        .no-print { display: none !important; }
        html, body, #root, .portfolio-shell { background: #000 !important; margin: 0; padding: 0; }
        .portfolio-shell { display: block !important; }
        .a3-page {
          page-break-after: always; break-after: page; box-shadow: none !important;
          margin: 0 !important; border: none !important; border-radius: 0 !important;
          width: 420mm !important; min-height: 297mm !important; height: 297mm !important;
          background: #050505 !important; overflow: hidden !important;
        }
        .a3-page:last-of-type { page-break-after: avoid; }
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
      }
      @page { size: A3 landscape; margin: 0; }
    `}</style>
    <PrintButton />
    <div className="portfolio-shell w-full min-h-screen bg-black flex flex-col items-center py-12 gap-12">
      <Cover />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
      <div className="text-gray-700 text-xs mt-6 mb-16 no-print">RevolutionX STEM Racing — Enterprise Portfolio | National Finals Edition</div>
    </div>
  </>
);

export default App;
