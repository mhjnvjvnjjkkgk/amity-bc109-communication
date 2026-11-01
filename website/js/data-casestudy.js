// Amity University Kolkata - BC109: Master Case Study & Persuasive Strategy Blueprint Data
window.CASE_STUDY_DATA = {
  id: "case-study-greenshift",
  code: "CASE-BC109",
  title: "Master Case Study: The GreenShift Dilemma",
  subtitle: "Persuading Against the Tide: Winning Support for an Unpopular Transformation",
  organization: "GreenShift Manufacturing Ltd. (35-Year Indian Industrial Equipment Enterprise)",
  ceo: "Ananya Rao",
  context: "4,500 employees across 4 Indian states facing 'Project GreenShift 2030'—a 50% carbon reduction mandate involving plant closures, automation, and 700 reskilled workers.",
  analyticalQuestions: [
    {
      id: "cs-q1",
      number: "1",
      title: "Why is a single persuasive message unlikely to succeed with all stakeholder groups in this case?",
      solution: `
        <p>A single, homogenized persuasive message will fail because the stakeholder groups hold conflicting priorities, varying levels of power, and differing cognitive frames:</p>
        <ul>
          <li><strong>Conflicting Priority Quadrants:</strong> European international clients demand rapid decarbonization and ESG compliance; institutional investors prioritize quarterly EBITDA and margin preservation; factory floor employees prioritize job security and family livelihoods. A message emphasizing speed and automation reassures clients but terrifies workers.</li>
          <li><strong>Divergent Psychological Filters:</strong> Senior managers interpret the initiative through the lens of performance quotas and career accountability; the labor union views it through historical suspicion of corporate downsizing.</li>
          <li><strong>Language & Semantic Misalignment:</strong> High-level corporate jargon (e.g., 'synergistic decarbonization', 'operational rationalization') registers to front-line workers as coded language for job cuts, breeding cynicism.</li>
          <li><strong>Strategic Requirement:</strong> Persuasion requires targeted message architecture: tailored value propositions (WIIFM) delivered through appropriate channels while preserving core factual consistency across the organization.</li>
        </ul>
      `
    },
    {
      id: "cs-q2",
      number: "2",
      title: "Identify and prioritize the stakeholders according to Power, Interest, Influence, and Potential Resistance.",
      solution: `
        <p>Using the Mendelow Power-Interest Grid combined with Resistance Mapping:</p>
        <div class="table-responsive">
          <table class="content-table">
            <thead>
              <tr>
                <th>Stakeholder Group</th>
                <th>Power (1-5)</th>
                <th>Interest (1-5)</th>
                <th>Influence Level</th>
                <th>Potential Resistance</th>
                <th>Prioritization Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Labor Union Leaders</strong></td>
                <td>4 / 5</td>
                <td>5 / 5</td>
                <td>High (Can halt operations)</td>
                <td><strong>High (Threat of strike)</strong></td>
                <td><strong>Priority 1: Key Player (Collaborate Closely)</strong></td>
              </tr>
              <tr>
                <td><strong>2. Senior Managers</strong></td>
                <td>4 / 5</td>
                <td>4 / 5</td>
                <td>High (Operational execution)</td>
                <td><strong>Moderate-High (Silent sabotage)</strong></td>
                <td><strong>Priority 1: Key Player (Align Incentives)</strong></td>
              </tr>
              <tr>
                <td><strong>3. Employees (700 Affected + Broader Base)</strong></td>
                <td>3 / 5</td>
                <td>5 / 5</td>
                <td>Moderate (Morale & productivity)</td>
                <td><strong>High (Rumors & anxiety)</strong></td>
                <td><strong>Priority 2: Keep Informed & Supported</strong></td>
              </tr>
              <tr>
                <td><strong>4. Institutional Investors</strong></td>
                <td>5 / 5</td>
                <td>4 / 5</td>
                <td>Critical (Capital & share price)</td>
                <td><strong>Moderate (Fear of capex drag)</strong></td>
                <td><strong>Priority 1: Key Player (Manage Closely)</strong></td>
              </tr>
              <tr>
                <td><strong>5. European International Clients</strong></td>
                <td>5 / 5</td>
                <td>5 / 5</td>
                <td>Critical (Contract renewals)</td>
                <td><strong>Low (Aligned with ESG goals)</strong></td>
                <td><strong>Priority 2: Keep Satisfied</strong></td>
              </tr>
              <tr>
                <td><strong>6. Local Community & Small Businesses</strong></td>
                <td>2 / 5</td>
                <td>4 / 5</td>
                <td>Moderate (Social license)</td>
                <td><strong>Moderate-High (Public protest)</strong></td>
                <td><strong>Priority 3: Keep Consulted</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "cs-q3",
      number: "3",
      title: "What are the major psychological, organizational, and cultural barriers that may prevent persuasion?",
      solution: `
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-brain"></i> Psychological Barriers</div>
            <p><strong>Loss Aversion:</strong> Employees weigh potential job losses twice as heavily as the benefits of future reskilling.<br>
            <strong>Status Quo Bias:</strong> Preference for familiar 35-year operational routines.<br>
            <strong>Confirmation Bias:</strong> Interpreting any new automated camera or sensor as proof of planned surveillance.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-sitemap"></i> Organizational Barriers</div>
            <p><strong>Historical Distrust:</strong> Lingering resentment from past restructuring initiatives that were poorly handled.<br>
            <strong>Siloed Middle Management:</strong> Senior managers giving lip service in public while privately slowing down implementation.<br>
            <strong>Information Cascades:</strong> Informal grapevine rumors moving faster than official corporate communications.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-globe"></i> Cultural Barriers</div>
            <p><strong>Paternalistic Expectations:</strong> As a 35-year-old firm, workers expect lifetime employment and paternal protection.<br>
            <strong>Fear of AI Dignity Loss:</strong> Pride in hands-on craftsmanship clashing with AI-guided manufacturing lines.</p>
          </div>
        </div>
      `
    },
    {
      id: "cs-q4",
      number: "4",
      title: "Which persuasive approaches would be most appropriate for each stakeholder group?",
      solution: `
        <div class="table-responsive">
          <table class="content-table">
            <thead>
              <tr>
                <th>Stakeholder Group</th>
                <th>Primary Rhetorical / Influence Approach</th>
                <th>Operational Persuasion Tactic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Senior Managers</strong></td>
                <td><strong>Logos + Reciprocity</strong></td>
                <td>Revise annual KPI scorecards to de-risk short-term disruption; provide transition budgets and clear incentive bonuses for hitting green targets.</td>
              </tr>
              <tr>
                <td><strong>Employees (Floor Workers)</strong></td>
                <td><strong>Pathos + Narrative Persuasion + Unity</strong></td>
                <td>Share authentic employee stories highlighting colleagues who transitioned into advanced tech roles; offer guaranteed reskilling and transparent redeployment timelines.</td>
              </tr>
              <tr>
                <td><strong>Labor Union Leaders</strong></td>
                <td><strong>Commitment & Consistency + Social Proof</strong></td>
                <td>Establish joint oversight committees; showcase peer industrial firms that implemented automation alongside workforce growth; create legally binding reskilling covenants.</td>
              </tr>
              <tr>
                <td><strong>Institutional Investors</strong></td>
                <td><strong>Logos + Loss Aversion</strong></td>
                <td>Highlight the downside risk: non-compliance means losing European contracts worth €45M. Show clear ROI models with a 3.8-year payback on renewable infrastructure.</td>
              </tr>
              <tr>
                <td><strong>International Clients</strong></td>
                <td><strong>Ethos + Verifiable Evidence</strong></td>
                <td>Provide transparent third-party carbon audits, ISO-14064 certifications, and a real-time ESG compliance portal.</td>
              </tr>
              <tr>
                <td><strong>Local Communities</strong></td>
                <td><strong>Reciprocity + Ethical Stewardship</strong></td>
                <td>Convert closed plant sites into community technical skill incubators, hiring local vendors for the green infrastructure projects.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "cs-q5",
      number: "5",
      title: "How can the company address employee fears regarding automation without damaging the credibility of management?",
      solution: `
        <ul>
          <li><strong>Principle of Radical Transparency:</strong> Acknowledge straightforwardly that legacy machinery will be phased out and repetitive manual roles will change. Do not hide behind euphemisms like 'synergistic rationalization'.</li>
          <li><strong>Binding 'Reskill First' Policy:</strong> Issue a written, board-approved commitment: <em>Every qualified employee in the 700-person cohort will receive paid reskilling during regular working hours, with guaranteed internal redeployment before any outside hiring.</em></li>
          <li><strong>Demonstrate AI as an Assistant, Not a Competitor:</strong> Run live plant floor demonstrations showing that AI monitoring handles hazardous, repetitive tasks while keeping human operators in the loop as technicians.</li>
          <li><strong>Independent Oversight:</strong> Form a Joint Transformation Council featuring elected union representatives to oversee the retraining and redeployment process.</li>
        </ul>
      `
    },
    {
      id: "cs-q6",
      number: "6",
      title: "What communication channels should be used for each stakeholder group?",
      solution: `
        <div class="table-responsive">
          <table class="content-table">
            <thead>
              <tr>
                <th>Stakeholder Group</th>
                <th>Primary Channels</th>
                <th>Media Richness Justification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Employees & Factory Floor</strong></td>
                <td>In-person shift briefings, town halls, regional language print brochures, plant-floor kiosks, WhatsApp noticeboard.</td>
                <td><strong>High Richness:</strong> Face-to-face dialogues allow leaders to observe emotional reactions and answer questions directly.</td>
              </tr>
              <tr>
                <td><strong>Labor Union Leaders</strong></td>
                <td>Bilateral executive negotiation sessions, joint task force meetings, formal signed covenants.</td>
                <td><strong>Maximum Richness:</strong> Formal dialogue is essential for building trust and resolving complex points.</td>
              </tr>
              <tr>
                <td><strong>Senior Management</strong></td>
                <td>Offsite strategy retreats, bi-weekly steering calls, dedicated executive intranet dashboard.</td>
                <td><strong>High-to-Medium Richness:</strong> Combines deep strategy alignment with operational tracking.</td>
              </tr>
              <tr>
                <td><strong>Institutional Investors</strong></td>
                <td>Quarterly investor briefings, financial disclosures, investor roadshows, regulatory filings.</td>
                <td><strong>Lean-to-Medium Richness:</strong> Focuses on audited numbers, financial models, and regulatory compliance.</td>
              </tr>
              <tr>
                <td><strong>European Clients</strong></td>
                <td>Bespoke ESG compliance portals, virtual executive syncs, quarterly sustainability reports.</td>
                <td><strong>Medium Richness:</strong> Delivers auditable data paired with regular client updates.</td>
              </tr>
              <tr>
                <td><strong>Local Communities</strong></td>
                <td>Community town halls, local vernacular press releases, regional NGO roundtables.</td>
                <td><strong>Richness Blend:</strong> In-person meetings build personal goodwill, while local press ensures transparency.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "cs-q7",
      number: "7",
      title: "Explain why channel selection is strategically important.",
      solution: `
        <p>Channel selection determines whether a message is accepted or rejected:</p>
        <ul>
          <li><strong>Media Richness Alignment (Daft & Lengel):</strong> Highly ambiguous, emotionally charged messages (e.g., plant closures and automation) delivered through lean channels like cold emails breed anxiety and resentment. High-friction updates require face-to-face dialogue.</li>
          <li><strong>Informational Fidelity vs. Distortion:</strong> Lean channels lack vocal inflection, warmth, and nonverbal reassurance, increasing the likelihood that employees misinterpret messages.</li>
          <li><strong>Accessibility & Cultural Fit:</strong> Factory workers across four Indian states may rarely check corporate email; reaching them requires local languages, in-person shift briefings, and mobile messaging.</li>
          <li><strong>Grapevine Disruption:</strong> Communicating through the right channels at the right time gets accurate information to teams before informal rumors fill the silence.</li>
        </ul>
      `
    },
    {
      id: "cs-q8",
      number: "8",
      title: "How should the organization respond to misinformation and rumors while maintaining trust and transparency?",
      solution: `
        <div class="callout callout-info">
          <div class="callout-title"><i class="fas fa-bullhorn"></i> Four-Step Rumor Neutralization Strategy</div>
          <ol>
            <li><strong>Rumor Intelligence & Listening Hub:</strong> Monitor internal communication channels and feedback boxes daily to catch misconceptions early.</li>
            <li><strong>Direct 'Myth vs. Fact' Portal:</strong> Launch an internal campaign addressing rumors plainly without repeating inflammatory language:
              <br><em>Rumor: "Management is secretly installing cameras to cut 1,500 jobs by Diwali."</em>
              <br><em>Verified Fact: "The sensors monitor thermal variations in heavy kilns to prevent safety accidents. Zero headcount reductions are linked to these sensors."</em>
            </li>
            <li><strong>Empower Front-Line Supervisors:</strong> Give shift supervisors daily briefing sheets so they can answer floor questions directly during morning standups.</li>
            <li><strong>Radical Candor:</strong> If an uncomfortable rumor is true (e.g., two legacy units closing in Month 5), confirm it immediately alongside the transition and support package, rather than stonewalling.</li>
          </ol>
        </div>
      `
    },
    {
      id: "cs-q9",
      number: "9",
      title: "Develop a stakeholder-specific message framework for all key groups.",
      solution: `
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-users"></i> Employees</div>
            <p><strong>Core Message:</strong> <em>"Our 35-year legacy was built by our people, and our future will be too. As our equipment modernizes, we are investing in your skills. No employee will be left behind."</em></p>
          </div>
          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-handshake"></i> Labor Union Leaders</div>
            <p><strong>Core Message:</strong> <em>"We invite union leadership to co-design our reskilling and transition programs. Let us negotiate a transparent, legally binding covenant that protects worker dignity and ensures company sustainability."</em></p>
          </div>
          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-chart-line"></i> Institutional Investors</div>
            <p><strong>Core Message:</strong> <em>"Project GreenShift 2030 protects our €45M European market pipeline and cuts long-term energy costs by 22%, delivering an IRR of 18.4% and an estimated payback period of 3.8 years."</em></p>
          </div>
          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-globe-europe"></i> International Clients</div>
            <p><strong>Core Message:</strong> <em>"GreenShift is aligning its production with European carbon standards. By 2028, your supply chain will benefit from verified carbon-neutral industrial components."</em></p>
          </div>
          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-city"></i> Local Communities</div>
            <p><strong>Core Message:</strong> <em>"We are committed to our home regions. Our decommissioned sites will be transformed into community vocational training hubs, prioritizing local employment."</em></p>
          </div>
        </div>
      `
    },
    {
      id: "cs-q10",
      number: "10",
      title: "What ethical boundaries must the organization maintain while attempting to persuade resistant stakeholders?",
      solution: `
        <ul>
          <li><strong>No Deceptive Concealment:</strong> Avoid sugarcoating plant closures or making false promises about preserving obsolete roles.</li>
          <li><strong>Protect Employee Dignity & Free Will:</strong> Participation in advanced reskilling programs should be encouraged with clear career incentives, not coerced through threats of immediate termination.</li>
          <li><strong>Informational Parity:</strong> Share the same core operational data and environmental imperatives with both union leaders and investor committees.</li>
          <li><strong>Honoring Commitments:</strong> Written agreements regarding severance benefits, retraining stipends, and relocation support must be legally and morally upheld without fine-print loopholes.</li>
        </ul>
      `
    }
  ],
  blueprint: {
    title: "Project GreenShift 2030: Comprehensive Persuasive Strategy Blueprint",
    scope: "1,500–2,000 Word Formal Executive Consultancy Deliverable",
    sections: [
      {
        id: "bp-s1",
        title: "1. Stakeholder Analysis Matrix",
        content: `
          <p>The stakeholder landscape of GreenShift Manufacturing Ltd. encompasses six groups characterized by divergent power dynamics, urgency, and operational expectations:</p>
          <div class="table-responsive">
            <table class="content-table">
              <thead>
                <tr>
                  <th>Stakeholder Group</th>
                  <th>Primary Motivations & Concerns</th>
                  <th>Power / Influence</th>
                  <th>Current Stance</th>
                  <th>Engagement Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Senior Plant Managers</strong></td>
                  <td>Fear missing annual production KPIs, budget cuts, and accountability for operational disruptions.</td>
                  <td>High / High</td>
                  <td>Public compliance; private resistance.</td>
                  <td>Realign KPI scorecards; provide transition budgets; engage in collaborative program design.</td>
                </tr>
                <tr>
                  <td><strong>Labor Union Leadership</strong></td>
                  <td>Worker job security, preservation of union membership base, lack of historical transparency.</td>
                  <td>High / High</td>
                  <td>Suspicious; actively threatening strike action.</td>
                  <td>Formal bilateral negotiations; joint steering committee; legally binding reskilling covenant.</td>
                </tr>
                <tr>
                  <td><strong>Factory Floor Employees (700 Affected)</strong></td>
                  <td>Loss of employment, automation anxiety, AI surveillance, loss of familiar daily routines.</td>
                  <td>Moderate / Moderate</td>
                  <td>High anxiety; vulnerable to rumors and panic.</td>
                  <td>In-person shift briefings; guaranteed paid reskilling; clear redeployment timelines.</td>
                </tr>
                <tr>
                  <td><strong>Institutional Investors</strong></td>
                  <td>Quarterly EBITDA, capital expenditure drag, potential dividend reductions.</td>
                  <td>Critical / High</td>
                  <td>Cautious; demanding financial discipline.</td>
                  <td>ROI modeling; risk framing around European contract retention (€45M).</td>
                </tr>
                <tr>
                  <td><strong>European International Clients</strong></td>
                  <td>Supply-chain Scope 3 carbon compliance, ESG regulatory mandates (CBAM).</td>
                  <td>Critical / High</td>
                  <td>Supportive of sustainability; demanding proof.</td>
                  <td>Audited ESG disclosures; ISO-14064 milestone reports.</td>
                </tr>
                <tr>
                  <td><strong>Local Communities & Small Businesses</strong></td>
                  <td>Regional economic decline, loss of local purchasing power around closed units.</td>
                  <td>Moderate / Low</td>
                  <td>Anxious; questioning corporate social responsibility.</td>
                  <td>Town halls; repurposing facilities into community technical training centers.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "bp-s2",
        title: "2. Persuasion Objectives",
        content: `
          <p>The communication strategy balances five measurable organizational objectives to be achieved across the 6-month pre-announcement period:</p>
          <ul>
            <li><strong>Objective 1 (Leadership Alignment):</strong> Secure 100% written sign-off from all 45 senior plant managers on the revised transition KPIs by Month 2.</li>
            <li><strong>Objective 2 (Labor Stability):</strong> Negotiate and sign a binding 'Green Transformation & Workforce Security Pact' with labor unions by Month 4, avoiding strikes.</li>
            <li><strong>Objective 3 (Reskilling Buy-in):</strong> Achieve at least an 85% voluntary opt-in rate among the 700 affected employees for the first round of paid technical reskilling programs by Month 5.</li>
            <li><strong>Objective 4 (Investor Confidence):</strong> Maintain stock price stability (within +/- 3% of baseline) during the capital expenditure announcement, backed by positive analyst reports highlighting European market access.</li>
            <li><strong>Objective 5 (Market Retention):</strong> Secure renewed multi-year supply contracts with all major European client accounts by Month 6.</li>
          </ul>
        `
      },
      {
        id: "bp-s3",
        title: "3. Resistance Mapping",
        content: `
          <div class="feature-grid">
            <div class="feature-card">
              <div class="feature-card-header"><i class="fas fa-layer-group"></i> Level 1: Cognitive Resistance ("I don't understand it")</div>
              <p>Employees lack clarity on what AI-driven monitoring and automated manufacturing actually involve. <em>Intervention:</em> Visual, plain-language plant floor demos showing human operators working alongside automated systems.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-header"><i class="fas fa-heart-broken"></i> Level 2: Emotional Resistance ("I don't like it / I'm afraid")</div>
              <p>Fear of obsolescence, loss of vocational identity, and skepticism born of previous bungled corporate changes. <em>Intervention:</em> Open listening sessions, personal career roadmaps, and storytelling featuring peers who made successful transitions.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-header"><i class="fas fa-handshake-slash"></i> Level 3: Political / Structural Resistance ("I don't trust leadership")</div>
              <p>Union officials and middle managers suspect a hidden agenda to downsize headcount. <em>Intervention:</em> Independent third-party audits, joint decision-making committees, and binding written agreements.</p>
            </div>
          </div>
        `
      },
      {
        id: "bp-s4",
        title: "4. Persuasive Messaging Architecture",
        content: `
          <p>To preserve consistency while addressing specific stakeholder concerns, messaging follows a shared core with tailored extensions:</p>
          <div class="callout callout-info">
            <div class="callout-title"><i class="fas fa-anchor"></i> Unified Core Message</div>
            <p><strong>"Project GreenShift 2030 ensures our company's long-term future. By modernizing our operations and investing in our workforce, we protect our business, jobs, and shared community for the next 35 years."</strong></p>
          </div>
          <div class="table-responsive">
            <table class="content-table">
              <thead>
                <tr>
                  <th>Audience</th>
                  <th>Tailored Message Angle</th>
                  <th>Primary Supporting Proof</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Employees</strong></td>
                  <td>Job protection through modern skills training.</td>
                  <td>Guaranteed paid training hours and redeployment priority.</td>
                </tr>
                <tr>
                  <td><strong>Union Leaders</strong></td>
                  <td>Collaborative partnership and worker dignity.</td>
                  <td>Joint governance committee and enforceable transition pact.</td>
                </tr>
                <tr>
                  <td><strong>Senior Managers</strong></td>
                  <td>Sustainable operational performance without penalty.</td>
                  <td>Adjusted transition KPIs and dedicated project budgets.</td>
                </tr>
                <tr>
                  <td><strong>Investors</strong></td>
                  <td>Long-term profitability and risk management.</td>
                  <td>3.8-year payback model and protection of €45M in European contracts.</td>
                </tr>
                <tr>
                  <td><strong>European Clients</strong></td>
                  <td>Reliable ESG partner with verified carbon reduction.</td>
                  <td>Third-party audited milestone roadmap and carbon certificates.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "bp-s5",
        title: "5. Channel Strategy",
        content: `
          <p>Aligning channel richness with message complexity across all communication stages:</p>
          <ul>
            <li><strong>Face-to-Face Town Halls & Shift Briefings:</strong> High-richness channels for factory workers and unit teams to deliver updates, answer questions, and build personal reassurance.</li>
            <li><strong>Bilateral Closed-Door Negotiation Sessions:</strong> High-richness channels for union leaders and executive teams to build trust and draft binding agreements.</li>
            <li><strong>Regional Mobile Messaging & Printed FAQ Booklets:</strong> Distributed in local regional languages across all four states to ensure workers and families have direct, accurate facts.</li>
            <li><strong>Investor Webcasts & Regulatory Briefings:</strong> Medium-richness channels with structured slide decks, financial models, and live Q&A.</li>
            <li><strong>Interactive Community Open Houses:</strong> In-person sessions to address local concerns, outline facility repurposing plans, and answer community questions.</li>
          </ul>
        `
      },
      {
        id: "bp-s6",
        title: "6. Crisis and Rumor Management Plan",
        content: `
          <div class="diagram-box">
            <div class="diagram-title">The Four-Tier Rumor Response Framework</div>
            <div class="flow-chart">
              <div class="flow-node highlight">1. Pulse Monitoring</div>
              <span class="flow-arrow">➔</span>
              <div class="flow-node">2. Fact Verification</div>
              <span class="flow-arrow">➔</span>
              <div class="flow-node highlight">3. Rapid Clarification</div>
              <span class="flow-arrow">➔</span>
              <div class="flow-node">4. Manager Briefing</div>
            </div>
          </div>
          <ul>
            <li><strong>Rapid Response Standard:</strong> Rumors threatening workplace stability will receive official public clarification within 4 hours.</li>
            <li><strong>Internal "Myth vs. Fact" Noticeboards:</strong> Updated weekly across all plant sites to address recurring questions transparently.</li>
            <li><strong>No-Retaliation Inquiries:</strong> Confidential feedback channels allow employees to ask sensitive questions without fear of blowback.</li>
          </ul>
        `
      },
      {
        id: "bp-s7",
        title: "7. Six-Month Communication Roadmap",
        content: `
          <div class="table-responsive">
            <table class="content-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Primary Focus</th>
                  <th>Key Actions & Deliverables</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Month 1</strong></td>
                  <td>Internal Executive Alignment</td>
                  <td>Executive offsite retreat; align all 45 senior managers; adjust transition KPIs; establish project team.</td>
                </tr>
                <tr>
                  <td><strong>Month 2</strong></td>
                  <td>Union Leadership Dialogue</td>
                  <td>Launch confidential talks with union leaders; create Joint Council; share audited market facts.</td>
                </tr>
                <tr>
                  <td><strong>Month 3</strong></td>
                  <td>Supervisor Empowerment</td>
                  <td>Train front-line supervisors to lead daily shift discussions; introduce prototype equipment to plant teams.</td>
                </tr>
                <tr>
                  <td><strong>Month 4</strong></td>
                  <td>Pact Signing & Workforce Launch</td>
                  <td>Sign the 'Transformation & Security Pact'; CEO addresses company-wide town hall; launch reskilling enrollment.</td>
                </tr>
                <tr>
                  <td><strong>Month 5</strong></td>
                  <td>External Engagement</td>
                  <td>Host investor briefings; conduct community open houses; provide ESG verification updates to European clients.</td>
                </tr>
                <tr>
                  <td><strong>Month 6</strong></td>
                  <td>Final Implementation Announcement</td>
                  <td>Publish the comprehensive implementation plan; celebrate the first reskilled cohort; transition to ongoing operational monitoring.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "bp-s8",
        title: "8. Ethical Persuasion Guidelines",
        content: `
          <p>The campaign adheres to four ethical standards to prevent manipulation and preserve trust:</p>
          <ul>
            <li><strong>Commitment to Truthfulness:</strong> All timelines, financial projections, and operational changes must be accurate and verifiable.</li>
            <li><strong>No Coercion:</strong> Transition programs must rely on positive incentives rather than punitive threats.</li>
            <li><strong>Equitable Disclosure:</strong> Significant operational developments must be shared with union leadership and employee groups concurrently with investors.</li>
            <li><strong>Honoring Agreements:</strong> Commitments to reskilling stipends, benefits, and support programs must be legally binding and fully funded.</li>
          </ul>
        `
      },
      {
        id: "bp-s9",
        title: "9. Success Measurement Framework",
        content: `
          <p>Progress and campaign health are evaluated using a balanced scorecard:</p>
          <div class="feature-grid">
            <div class="feature-card">
              <div class="feature-card-header"><i class="fas fa-heartbeat"></i> Workforce Sentiment & Stability</div>
              <p>Monthly sentiment surveys targeting 70%+ positive scores; zero days lost to wildcat strikes or industrial action.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-header"><i class="fas fa-graduation-cap"></i> Reskilling Milestones</div>
              <p>At least 85% of affected workers enrolled in reskilling by Month 5; 90%+ pass rate on technical certifications.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-header"><i class="fas fa-chart-line"></i> Financial & Client Retention</div>
              <p>100% renewal of targeted European accounts; share price stability within +/- 3% through announcement week.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-header"><i class="fas fa-city"></i> Community Trust</div>
              <p>Zero public blockades or protests; positive resolutions reached with regional community leaders.</p>
            </div>
          </div>
        `
      }
    ]
  }
};
