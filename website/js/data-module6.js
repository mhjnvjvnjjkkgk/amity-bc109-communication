// Amity University Kolkata - BC109: Module VI Data (Expanded & Comprehensive)
window.MODULE_6_DATA = {
  id: "module-6",
  code: "MOD-06",
  title: "Module VI: Presentation Skills",
  weightage: "10%",
  summary: "Comprehensive guide to executive presentation delivery: The 4 Ps (Planning, Preparation, Practice, Performance), multidimensional audience analysis (WIIFM), slide hygiene and cognitive load theory, delivery methods (Extemporaneous vs. Manuscript), Steve Jobs' keynote architecture, virtual presentation hygiene, and high-stakes Q&A management.",
  topics: [
    {
      id: "m6-t1",
      title: "The 4 Ps of Presentation: Planning, Preparation, Practice & Performance",
      badge: "Methodological Lifecycle",
      badgeColor: "blue",
      readTime: "11 min read",
      content: `
        <p>A memorable presentation is built through a disciplined four-stage lifecycle:</p>

        <div class="diagram-box">
          <div class="diagram-title">The 4 Ps Presentation Lifecycle</div>
          <div class="flow-chart">
            <div class="flow-node highlight">1. Planning</div>
            <span class="flow-arrow">➔</span>
            <div class="flow-node">2. Preparation</div>
            <span class="flow-arrow">➔</span>
            <div class="flow-node highlight">3. Practice</div>
            <span class="flow-arrow">➔</span>
            <div class="flow-node">4. Performance</div>
          </div>
        </div>

        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-compass"></i> 1. Planning (Strategic Foundation)</div>
            <p>Define the single core objective: to <em>Inform</em>, <em>Persuade</em>, <em>Inspire</em>, or <em>Entertain</em>. Identify constraints: allotted time, physical venue, tech infrastructure, and audience size.</p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-file-alt"></i> 2. Preparation (Content Curation)</div>
            <p>Conduct research, gather data, organize key themes, and structure the narrative arc. Design minimalist slides that support your points without overwhelming the audience.</p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-stopwatch"></i> 3. Practice (Muscle Memory)</div>
            <p>Rehearse out loud while standing up. Time every section, practice smooth slide transitions, and test how you deliver key conclusions until timing feels natural.</p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-microphone"></i> 4. Performance (Live Execution)</div>
            <p>Engage the audience with eye contact, steady posture, vocal projection, and purposeful gestures. Adapt smoothly if technical issues arise, and guide the room through Q&A.</p>
          </div>
        </div>
      `
    },
    {
      id: "m6-t2",
      title: "Audience Analysis: Demographics, Psychographics & WIIFM",
      badge: "Audience Profiling",
      badgeColor: "purple",
      readTime: "10 min read",
      content: `
        <h3>1. The Core Guiding Rule: WIIFM</h3>
        <div class="callout callout-tip">
          <div class="callout-title"><i class="fas fa-bullseye"></i> What's In It For Me? (WIIFM)</div>
          <p>Every audience member subconsciously asks: <em>"Why does this matter to me? How does this solve my problems or save my time?"</em> If a presentation fails to answer WIIFM within the first two minutes, engagement drops quickly.</p>
        </div>

        <h3>2. Dimensions of Audience Profiling</h3>
        <div class="table-responsive">
          <table class="content-table">
            <thead>
              <tr>
                <th>Analytical Lens</th>
                <th>Core Factors Analyzed</th>
                <th>Strategic Presentation Adjustment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Demographics</strong></td>
                <td>Age, gender distribution, educational background, professional seniority, cultural origins.</td>
                <td>Adapt vocabulary, humor, cultural references, and examples to fit the room.</td>
              </tr>
              <tr>
                <td><strong>Psychographics</strong></td>
                <td>Core values, beliefs, attitudes, professional priorities, political sensitivities.</td>
                <td>Align recommendations with values the audience cares about (e.g., risk reduction vs. innovative growth).</td>
              </tr>
              <tr>
                <td><strong>Prior Knowledge Level</strong></td>
                <td>Novice, intermediate, or technical domain experts.</td>
                <td>Avoid oversimplifying for experts; avoid using unexplained technical acronyms with general audiences.</td>
              </tr>
              <tr>
                <td><strong>Disposition & Attitude</strong></td>
                <td>Friendly, neutral/uninformed, skeptical, or openly hostile.</td>
                <td>With friendly audiences, inspire action; with hostile groups, lead with shared goals, rigorous data, and objective third-party proof.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "m6-t3",
      title: "Audio-Visual Aids: Slide Design Hygiene & Cognitive Load Theory",
      badge: "Visual Ergonomics",
      badgeColor: "amber",
      readTime: "11 min read",
      content: `
        <h3>1. Mayer's Cognitive Load Theory & Dual-Coding</h3>
        <p>Educational psychologist Richard Mayer proved that the human brain processes information through two separate channels: <strong>visual</strong> (eyes) and <strong>auditory/verbal</strong> (ears). When a speaker presents slides packed with full text paragraphs while speaking simultaneously, the auditory channel is overloaded (the <em>split-attention effect</em>), causing comprehension to plummet.</p>

        <h3>2. Guy Kawasaki's 10 / 20 / 30 Rule</h3>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-layer-group"></i> 10 Slides Maximum</div>
            <p>Ten slides is the ideal length for a business or venture pitch—it forces focus on essential concepts.</p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-clock"></i> 20 Minutes Duration</div>
            <p>Keep presentations under 20 minutes to maintain attention and leave ample time for interactive discussion.</p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-font"></i> 30-Point Minimum Font Size</div>
            <p>Using 30pt font prevents walls of text and ensures slides remain readable from the back of the room.</p>
          </div>
        </div>

        <h3>3. Essential Slide Design Hygiene</h3>
        <ul>
          <li><strong>One Idea Per Slide:</strong> Dedicate each slide to a single clear message or takeaway.</li>
          <li><strong>High Contrast & Clean Typography:</strong> Use dark text on light backgrounds or vice-versa. Stick to clean sans-serif fonts (Inter, Helvetica, Arial).</li>
          <li><strong>Visuals Over Text:</strong> Replace bulleted lists with clean charts, high-resolution diagrams, or process maps wherever possible.</li>
          <li><strong>Tech Contingency Plan:</strong> Always have backup options ready: a PDF on a thumb drive, cloud access, and physical printed notes in case of AV failure.</li>
        </ul>
      `
    },
    {
      id: "m6-t4",
      title: "Analyzing Nonverbal Dynamics & Delivery Methods",
      badge: "Stage Mastery",
      badgeColor: "rose",
      readTime: "13 min read",
      content: `
        <h3>1. Five Classical Methods of Presentation Delivery</h3>
        <div class="table-responsive">
          <table class="content-table">
            <thead>
              <tr>
                <th>Delivery Method</th>
                <th>Mechanism</th>
                <th>Key Advantages</th>
                <th>Risks & Drawbacks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Extemporaneous (Gold Standard)</strong></td>
                <td>Carefully planned, researched, and structured; delivered using brief bulleted notes or slide cues rather than a full script.</td>
                <td>Natural, conversational, highly responsive to audience feedback, allows flexible eye contact.</td>
                <td>Requires thorough preparation and domain confidence.</td>
              </tr>
              <tr>
                <td><strong>Impromptu Delivery</strong></td>
                <td>Delivered with minimal or zero advance preparation (e.g., unexpected request for an update).</td>
                <td>Highly authentic, spontaneous, and immediate.</td>
                <td>Risk of rambling, disjointed structure, or omitted key facts. Best navigated using frameworks like PREP.</td>
              </tr>
              <tr>
                <td><strong>Manuscript Delivery</strong></td>
                <td>Reading a complete, word-for-word text from a podium or teleprompter.</td>
                <td>Complete precision, zero risk of misquoting; essential for legal, diplomatic, or earnings calls.</td>
                <td>Can sound monotonous, restricts eye contact, and feels stiff and impersonal.</td>
              </tr>
              <tr>
                <td><strong>Memorisation Delivery</strong></td>
                <td>Reciting a complete, word-for-word speech entirely from memory.</td>
                <td>Leaves hands and eyes free to move and engage without any notes.</td>
                <td>High risk of blanking out under stress; can sound robotic and rehearsal-heavy.</td>
              </tr>
              <tr>
                <td><strong>Outlining Delivery</strong></td>
                <td>Speaking directly from a structured conceptual outline or mind-map hierarchy.</td>
                <td>Ensures logical progression while allowing spontaneous phrasing.</td>
                <td>Requires discipline to prevent spending too long on early points.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2. Reading & Responding to Audience Nonverbals</h3>
        <ul>
          <li><strong>Glazed Eyes / Wandering Attention:</strong> Signal to adjust tempo, ask an engaging question, or move to the next slide.</li>
          <li><strong>Crossed Arms & Furrowed Brows:</strong> Signals skepticism or confusion. Pause to clarify: <em>"Let us pause here—are there questions about these assumptions?"</em></li>
          <li><strong>Head Nods & Note-Taking:</strong> Signals strong alignment; maintain your pacing and build toward your call to action.</li>
        </ul>
      `
    },
    {
      id: "m6-t5",
      title: "Q&A Management & Handling Challenging Interrogations",
      badge: "Interactive Defense",
      badgeColor: "green",
      readTime: "10 min read",
      content: `
        <h3>The LADDER Framework for Professional Q&A</h3>
        <p>A poor Q&A can derail an otherwise solid presentation. Use the <strong>LADDER method</strong> to handle questions effectively:</p>

        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-ear-listen"></i> L - Listen Actively</div>
            <p>Listen without interrupting until the questioner finishes completely. Take a brief note if it is a multi-part question.</p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-check"></i> A - Acknowledge & Validate</div>
            <p>Validate the question respectfully: <em>"That touches on a critical operational point..."</em></p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-sitemap"></i> D - Deconstruct & Clarify</div>
            <p>Paraphrase complex or convoluted questions for the whole room: <em>"If I understand correctly, your question centers on our Q2 budget allocation..."</em></p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-comment-dots"></i> D - Deliver Concise Answer</div>
            <p>Answer directly in 45–60 seconds using verifiable data. Avoid defensive rambling.</p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-anchor"></i> E - Enforce Key Message</div>
            <p>Connect your answer back to the presentation's core takeaway.</p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header"><i class="fas fa-handshake"></i> R - Reconnect with Audience</div>
            <p>Check in briefly: <em>"Does that clarify the plan?"</em> then open the floor to the next question.</p>
          </div>
        </div>

        <div class="callout callout-warning">
          <div class="callout-title"><i class="fas fa-shield-alt"></i> The Golden Rule for Unknown Answers</div>
          <p>Never guess, bluff, or fabricate data. Simply state: <em>"I do not have the verified metrics on that specific variable right now. I will confirm with our analytics team and send an update by tomorrow morning."</em> Honesty preserves credibility.</p>
        </div>
      `
    },
    {
      id: "m6-t6",
      title: "Steve Jobs & TED Talk Rhetorical Architecture",
      badge: "Keynote Analysis",
      badgeColor: "purple",
      readTime: "11 min read",
      content: `
        <h3>Deconstructing the World's Most Influential Keynote Presentations</h3>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-card-header">The Rule of One (Nancy Duarte)</div>
            <p>Every legendary presentation has one single core unifying idea (the 'Big Idea'). If an audience can only remember one sentence, what must it be? (e.g., Steve Jobs 2008: <em>'MacBook Air: The world's thinnest notebook'</em>).</p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header">The STAR Moment (Something They'll Always Remember)</div>
            <p>A dramatic, unforgettable visual demonstration. When Steve Jobs introduced the MacBook Air, he did not cite dimensions; he pulled the laptop out of a standard manila office envelope. The audience gasped.</p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header">Villain vs. Hero Narrative Arc</div>
            <p>Introduce the 'Villain' (the painful, broken problem; e.g., clumsy smartphones with permanent plastic keyboards) before unveiling the 'Hero' (the elegant, intuitive touchscreen solution).</p>
          </div>

          <div class="feature-card">
            <div class="feature-card-header">Visual Minimalism (Zero Bullet Points)</div>
            <p>Steve Jobs and TED speakers never use standard bullet points. Slides feature a single bold word, a high-resolution photograph, or a dramatic metric, allowing the speaker to be the focal point.</p>
          </div>
        </div>
      `
    },
    {
      id: "m6-t7",
      title: "Virtual Presentation Hygiene: Camera Psychology & Remote Delivery",
      badge: "Remote Mastery",
      badgeColor: "green",
      readTime: "10 min read",
      content: `
        <h3>Mastering the Digital Screen (Zoom, Teams, Meet)</h3>
        <ul>
          <li><strong>The Camera Lens is the Audience:</strong> Looking down at faces on your screen creates the appearance of looking away or staring at your lap. Look directly into the webcam lens when speaking to simulate direct eye contact.</li>
          <li><strong>Three-Point Lighting Hygiene:</strong> Key light (45 degrees to the face), fill light (softening shadows), and back/hair light (separating you from the background). Avoid backlighting from bright windows which turns you into an ominous silhouette.</li>
          <li><strong>Audio Fidelity Priority:</strong> Research shows audiences judge speakers with muffled, reverberant laptop microphones as less intelligent and less trustworthy than those with dedicated condenser or lavalier microphones. Audio quality matters more than 4K video.</li>
          <li><strong>The 4-Minute Engagement Rule:</strong> In virtual settings, attention wanders after four minutes without interaction. Re-engage remote listeners using polls, chat prompts, or direct named questions.</li>
        </ul>
      `
    }
  ],
  questions: {
    shortAnswer: [
      {
        id: "m6-q1",
        marks: "2 Marks",
        type: "Structural",
        question: "Enumerate the '4 Ps' of presentation skills in sequence.",
        answer: "The 4 Ps of presentation skills are: 1. <strong>Planning</strong>, 2. <strong>Preparation</strong>, 3. <strong>Practice</strong>, and 4. <strong>Performance</strong>."
      },
      {
        id: "m6-q2",
        marks: "2 Marks",
        type: "Conceptual",
        question: "Explain the acronym 'WIIFM' and state its strategic value in presentation planning.",
        answer: "WIIFM stands for <strong>'What's In It For Me?'</strong> It represents the audience's natural desire to understand how the presentation's ideas, solutions, or recommendations directly benefit them, resolve their challenges, or save resources."
      },
      {
        id: "m6-q3",
        marks: "2 Marks",
        type: "Methodological",
        question: "State Guy Kawasaki's 10/20/30 Rule of presentation slide decks.",
        answer: "The rule states that a presentation slide deck should contain no more than <strong>10 slides</strong>, last no longer than <strong>20 minutes</strong>, and use a font size of at least <strong>30 points</strong>."
      },
      {
        id: "m6-q4",
        marks: "2 Marks",
        type: "Classification",
        question: "Why is 'Extemporaneous Delivery' considered the gold standard for business presentations?",
        answer: "Extemporaneous delivery is planned and practiced using structured notes or slide prompts rather than a full script. This allows the speaker to maintain natural eye contact, adapt to audience reactions, and deliver ideas conversationally without sounding robotic."
      },
      {
        id: "m6-q5",
        marks: "2 Marks",
        type: "Keynote Strategy",
        question: "What is a 'STAR Moment' in presentation design (Nancy Duarte)?",
        answer: "A STAR moment stands for 'Something They'll Always Remember'. It is a dramatic, unforgettable visual demonstration, startling statistic, or memorable physical prop designed to anchor the core message permanently in audience memory (e.g., Steve Jobs pulling MacBook Air from a manila envelope)."
      },
      {
        id: "m6-q6",
        marks: "2 Marks",
        type: "Cognitive Load",
        question: "Explain the 'Split-Attention Effect' in slide design.",
        answer: "The split-attention effect occurs when an audience attempts to read full paragraphs on a slide while simultaneously listening to the speaker's voice. Because both compete for the same verbal working memory, comprehension and retention plummet."
      },
      {
        id: "m6-q7",
        marks: "2 Marks",
        type: "Virtual Delivery",
        question: "Why is looking at the camera lens, rather than the screen, essential in virtual presentations?",
        answer: "Looking directly into the camera lens simulates direct, personal eye contact for remote participants. Looking down at screen thumbnails makes the speaker appear disconnected, distracted, or unconfident."
      },
      {
        id: "m6-q8",
        marks: "5 Marks",
        type: "Comparative",
        question: "Compare Manuscript Delivery with Extemporaneous Delivery across flexibility, eye contact, and suitable contexts.",
        answer: `1. <strong>Flexibility & Responsiveness:</strong> Manuscript delivery is rigid and difficult to adjust on the fly; Extemporaneous delivery allows the speaker to adapt pacing and content based on live audience reactions.
2. <strong>Eye Contact & Engagement:</strong> Manuscript delivery keeps the speaker's eyes tied to the text or teleprompter; Extemporaneous delivery frees the speaker to maintain steady, natural eye contact across the room.
3. <strong>Best-Fit Contexts:</strong> Manuscript delivery is appropriate for high-stakes, legally sensitive situations (diplomatic speeches, earnings calls, policy announcements) where exact wording is paramount. Extemporaneous delivery is best suited for corporate presentations, sales pitches, and team briefings.`
      },
      {
        id: "m6-q9",
        marks: "5 Marks",
        type: "Technical",
        question: "Explain Mayer's Cognitive Load Theory and the 'Split-Attention Effect' in slide design.",
        answer: `Richard Mayer demonstrated that the human brain processes information through two separate channels: visual and auditory.
- When slides feature walls of text that the audience must read while simultaneously listening to the speaker, both inputs compete for the same verbal processing capacity.
- This creates the <strong>split-attention effect</strong>, causing mental fatigue and reducing comprehension.
- <em>Best Practice:</em> Keep slides visually focused with diagrams, charts, or minimal keywords, allowing the speaker's voice to provide the narrative explanation.`
      },
      {
        id: "m6-q10",
        marks: "5 Marks",
        type: "Structural",
        question: "Describe the steps of the LADDER framework for handling tough Q&A questions.",
        answer: `The LADDER framework provides a structured approach to Q&A sessions:
1. <strong>L - Listen:</strong> Pay close attention to the full question without interrupting.
2. <strong>A - Acknowledge:</strong> Validate the question respectfully ('That is an important operational consideration').
3. <strong>D - Deconstruct:</strong> Clarify or rephrase convoluted questions for the room's benefit.
4. <strong>D - Deliver:</strong> Provide a concise, factual answer within 60 seconds.
5. <strong>E - Enforce:</strong> Connect the answer back to your presentation's main theme.
6. <strong>R - Reconnect:</strong> Check in with the questioner ('Does that address your point?') and move forward.`
      },
      {
        id: "m6-q11",
        marks: "5 Marks",
        type: "Application",
        question: "How should a presenter handle hostile or disruptive questions during a corporate town hall?",
        answer: `1. <strong>Maintain Emotional Composure:</strong> Keep vocal tone measured and avoid defensive body language.
2. <strong>Separate Emotion from Content:</strong> Acknowledge the underlying concern while focusing on objective facts: <em>'I hear your frustration regarding the timeline changes; let's look at the resource data behind this decision.'</em>
3. <strong>Avoid Public Arguments:</strong> Do not engage in extended back-and-forth debates that derail the meeting.
4. <strong>Offer Offline Follow-ups:</strong> If a questioner remains disruptive, offer to continue the discussion individually: <em>'This deserves a detailed discussion; let's connect right after this session to walk through the numbers.'</em>`
      },
      {
        id: "m6-q12",
        marks: "5 Marks",
        type: "Slide Ergonomics",
        question: "Explain five rules of typography and color contrast for corporate presentations.",
        answer: `1. <strong>High Contrast:</strong> Dark text on light background (or dark background with crisp white text); test readability from 20 feet away.
2. <strong>Sans-Serif Font Families:</strong> Use clean sans-serif typefaces (e.g., Inter, Helvetica, Arial); avoid decorative script fonts.
3. <strong>Font Size Hierarchy:</strong> Slide titles should be 36-44pt bold; body text should never fall below 24-28pt (complying with the 30pt rule).
4. <strong>Color Palette Restraint:</strong> Stick to a 3-color scheme (one dominant neutral, one background tone, one high-energy accent color for key takeaways).
5. <strong>Capitalization Discipline:</strong> Avoid ALL CAPS in body paragraphs as it reduces reading speed and feels like shouting.`
      },
      {
        id: "m6-q13",
        marks: "5 Marks",
        type: "Virtual Psychology",
        question: "Detail four critical technical and environmental factors for high-stakes virtual Zoom/Teams presentations.",
        answer: `1. <strong>Eye-Level Camera Alignment:</strong> Elevate laptops so webcams sit at forehead/eye level, avoiding unflattering upward angles.
2. <strong>Dedicated External Audio:</strong> Use an external USB condenser or lapel microphone to eliminate room echo and fan noise.
3. <strong>Diffused Frontal Lighting:</strong> Position warm LED key lights in front of your face; never sit with a bright window behind you.
4. <strong>Hardwired Internet Connection:</strong> Use an Ethernet cable rather than Wi-Fi to eliminate video compression artifacts and packet loss.`
      },
      {
        id: "m6-q14",
        marks: "5 Marks",
        type: "Stagecraft",
        question: "What is 'Podium Trapping' and how should a professional speaker utilize stage space?",
        answer: `<strong>Podium Trapping</strong> occurs when a speaker grips a wooden lectern or podium, creating a physical barrier between themselves and the audience. This restricts natural hand gestures and communicates anxiety.
- <em>Corrective Protocol:</em> Step away from the podium into the open stage. Adopt the 'Triangular Stage Walk'—delivering Point 1 from stage left, Point 2 from stage right, and the conclusion from center stage, engaging all sections of the room.`
      },
      {
        id: "m6-q15",
        marks: "5 Marks",
        type: "Presentation Strategy",
        question: "Explain the 'Glance Test' in slide visual evaluation.",
        answer: `The <strong>Glance Test</strong> (Nancy Duarte) states that an audience member should be able to comprehend the single core meaning of a slide within 3 seconds.
- If a slide requires more than 3 seconds of concentrated reading to decode, it is a document, not a visual aid.
- Documents belong in printed handouts; presentation slides should function as visual billboards supporting the speaker's voice.`
      }
    ],
    longEssay: [
      {
        id: "m6-l1",
        marks: "10 Marks",
        type: "Comprehensive Theory",
        question: "Critically evaluate the five methods of delivery: Impromptu, Extemporaneous, Memorisation, Manuscript, and Outlining. Provide real-world corporate scenarios illustrating when each is most appropriate.",
        answer: `<strong>1. Introduction to Delivery Methodologies</strong>
A presentation's impact depends not just on its content, but on how it is delivered. Choosing the right delivery method depends on time constraints, legal risks, audience expectations, and technical needs.

<strong>2. Detailed Evaluation of the Five Delivery Modes:</strong>
- <strong>1. Extemporaneous Delivery:</strong>
  * <em>Mechanics:</em> Practiced with an outline and key talking points; words are chosen spontaneously during delivery.
  * <em>Corporate Scenario:</em> Quarterly business reviews, venture pitches, and strategy proposals.
- <strong>2. Impromptu Delivery:</strong>
  * <em>Mechanics:</em> Delivered on short notice without prepared slides; relies on quick mental frameworks (e.g., PREP).
  * <em>Corporate Scenario:</em> Providing unexpected project updates or answering surprise questions in executive meetings.
- <strong>3. Manuscript Delivery:</strong>
  * <em>Mechanics:</em> Read verbatim from a script or teleprompter.
  * <em>Corporate Scenario:</em> Press conferences during a crisis, legal depositions, or regulatory earnings calls.
- <strong>4. Memorisation Delivery:</strong>
  * <em>Mechanics:</em> Recited word-for-word from memory.
  * <em>Corporate Scenario:</em> Short keynote introductions or competitive pitches where scripts and notes are disallowed.
- <strong>5. Outlining Delivery:</strong>
  * <em>Mechanics:</em> Speaking from high-level mind maps or thematic cue cards.
  * <em>Corporate Scenario:</em> Workshop training sessions and interactive client consulting workshops.

<strong>3. Strategic Synthesis</strong>
Extemporaneous speaking remains the most adaptable and engaging style for business leaders, balancing structured preparation with conversational warmth.`
      },
      {
        id: "m6-l2",
        marks: "10 Marks",
        type: "Applied Visual Design",
        question: "Design an end-to-end framework for high-impact visual aids in executive presentations. Address cognitive load theory, typography, color contrast, and contingency plans for technical failures.",
        answer: `<strong>1. Cognitive Foundations: Minimizing Visual Friction</strong>
Visual aids should amplify the speaker's message, not compete with it for attention.

<strong>2. Five Core Principles for Executive Slide Decks:</strong>
- <em>1. Cognitive Load & Chunking:</em> Apply the 'Glance Test'—an audience member should understand the slide's core point within 3 seconds. Keep one main idea per slide.
- <em>2. Typography Standards:</em> Use clean, sans-serif fonts (e.g., Inter, Calibri, Helvetica). Titles should be 32–40pt bold; body text should stay above 24pt. Never use more than two font families.
- <em>3. Contrast & Color Palette:</em> Stick to 3 primary colors: one dark neutral for text, one light neutral for backgrounds, and an accent color for key takeaways. Ensure high contrast for readability in bright rooms.
- <em>4. Data Visualization Hygiene:</em> Replace dense data tables with clean bar charts, line graphs, or callout cards with clear labels.
- <em>5. Bullet Clutter Elimination:</em> Transform traditional bullet points into structured cards or process flows.

<strong>3. AV Contingency Protocol:</strong>
- Bring the presentation in multiple formats (PowerPoint, PDF, Google Slides link).
- Keep copies on a USB drive and accessible via cloud storage.
- Carry hard-copy executive summary sheets to distribute if projectors fail, allowing you to run the meeting smoothly regardless of tech issues.`
      },
      {
        id: "m6-l3",
        marks: "15 Marks",
        type: "Comprehensive Applied Rubric",
        question: "Develop an end-to-end Assessment Rubric for evaluating undergraduate professional presentations (100% scale). Define criteria across Content Structure, Visual Aids, Nonverbal Delivery, Vocalics, and Q&A Management.",
        answer: `<strong>BC109 PROFESSIONAL PRESENTATION ASSESSMENT RUBRIC (100 MARKS TOTAL)</strong>

<strong>1. Content Structure & Rhetorical Organization (25 Marks)</strong>
- <em>Hook & Introduction (5M):</em> Captures attention quickly with a strong hook; introduces the core theme and roadmap clearly.
- <em>Logical Progression & Body (10M):</em> Well-organized structure (e.g., PREP, Problem-Solution); clear verbal transitions; well-researched evidence.
- <em>Conclusion & Call to Action (5M):</em> Memorable summary tying key themes together with an actionable next step.
- <em>Audience Alignment & WIIFM (5M):</em> Directly answers how the proposal benefits the audience.

<strong>2. Nonverbal Delivery & Stage Presence (20 Marks)</strong>
- <em>Posture & Movement (5M):</em> Grounded, professional stance; avoids nervous rocking or pacing.
- <em>Gestures (5M):</em> Natural, expressive hand gestures inside the power zone; absence of nervous adaptors.
- <em>Eye Contact (5M):</em> Natural eye contact scanning the room (avoiding staring at notes or the screen).
- <em>Facial Expressiveness (5M):</em> Engaged, approachable expression matching the tone of the message.

<strong>3. Vocal Dynamics & Verbal Fluency (20 Marks)</strong>
- <em>Pacing & Tempo (5M):</em> Measured delivery (130–160 WPM); adjusts speed appropriately for key points.
- <em>Pitch & Modulation (5M):</em> Engaging vocal variety; avoids monotone delivery and upward question inflections on statements.
- <em>Volume & Articulation (5M):</em> Clear pronunciation, steady projection from the diaphragm, and distinct consonant sounds.
- <em>Pause Mastery (5M):</em> Uses intentional silences effectively instead of filler words (ums, likes).

<strong>4. Visual Aids & Slide Design (15 Marks)</strong>
- <em>Visual Hierarchy & Minimal Text (5M):</em> Avoids walls of text; applies the one-idea-per-slide principle.
- <em>Data Visualization Quality (5M):</em> Clean charts, clear diagrams, and easily readable metrics.
- <em>Design Hygiene (5M):</em> High contrast, readable typography (30pt+ rule), and cohesive color schemes.

<strong>5. Q&A Handling & Interpersonal Defense (20 Marks)</strong>
- <em>Active Listening & Composure (5M):</em> Listens without interrupting; stays calm under questioning.
- <em>Conciseness & Relevance (5M):</em> Delivers focused answers within 45–60 seconds.
- <em>Handling Challenging Inquiries (5M):</em> Applies the LADDER framework gracefully without defensiveness.
- <em>Ethical Transparency (5M):</em> Admits when data is not immediately available and offers prompt follow-up.`
      },
      {
        id: "m6-l4",
        marks: "10 Marks",
        type: "Keynote Rhetoric",
        question: "Deconstruct Steve Jobs' 2007 iPhone launch presentation. Analyze his use of Narrative Arcs, The Rule of Three, STAR Moments, and Visual Purity.",
        answer: `<strong>1. The Architectural Masterclass of Jobs' 2007 Launch</strong>
Steve Jobs' introduction of the iPhone remains the gold standard of product keynotes. It broke conventional corporate presentation norms by treating a product announcement as a three-act theatrical drama.

<strong>2. Four Structural Masterstrokes:</strong>
- <em>1. The Rule of Three Setup:</em> 'Today, we are introducing three revolutionary products: a widescreen iPod with touch controls, a revolutionary mobile phone, and a breakthrough internet communications device.' He repeated this triad four times until the audience recognized: 'These are not three separate devices; this is one device. And we are calling it iPhone.'
- <em>2. The Villain-Hero Narrative Arc:</em> Jobs cast the status quo smartphones (BlackBerry, Moto Q, Palm Treo) as the 'Villain'—showing that their permanent plastic keyboards took up half the screen. The iPhone emerged as the 'Hero'—a dynamic multi-touch glass surface that adapts to any application.
- <em>3. The STAR Moment (Something They'll Always Remember):</em> Placing a real-time prank call from stage to a local Starbucks and ordering 4,000 lattes to go, demonstrating map integration, cellular calling, and web search seamlessly.
- <em>4. Complete Visual Purity:</em> Zero bullet points. Slides featured high-contrast photographs of the device, single words, and minimalist text, ensuring 100% of audience focus was on Jobs and the product.`
      },
      {
        id: "m6-l5",
        marks: "10 Marks",
        type: "Q&A Crisis Simulation",
        question: "You are the Chief Technology Officer presenting an algorithmic restructuring plan to an angry, skeptical workforce. Script the handling of three hostile questions using the LADDER technique.",
        answer: `<strong>CTO Q&A DEFENSE PROTOCOL (LADDER METHOD)</strong>

<strong>Hostile Question 1:</strong> 'Are you just feeding us buzzwords while preparing to replace all senior engineers with automated scripts?'
- <em>Listen:</em> Hold eye contact; do not frown, sigh, or shake head.
- <em>Acknowledge:</em> 'That question cuts directly to the core anxiety about AI and career longevity in our company.'
- <em>Deconstruct:</em> 'You are asking whether this automation deployment reduces engineering headcount.'
- <em>Deliver:</em> 'The answer is an unequivocal No. Our engineering roadmap requires 120 more engineers by Q4. The scripts handle routine log auditing so you can focus on core architecture. We have issued a board-backed guarantee of zero redundancies.'
- <em>Enforce:</em> 'Our strategy is augmenting our talent, not displacing it.'
- <em>Reconnect:</em> 'Does that clarify our hiring and retention commitments?'

<strong>Hostile Question 2:</strong> 'Management promised us new testing equipment two years ago and failed. Why should we believe this budget exists?'
- <em>Listen:</em> Acknowledge historical baggage without defensive deflection.
- <em>Acknowledge:</em> 'You are completely right to raise the 2024 equipment delay; that project fell short of expectations.'
- <em>Deliver:</em> 'Unlike 2024, the capital expenditure for Project Horizon ($3.2M) has already been placed into an audited escrow account, and purchase orders for the first 40 units were signed Tuesday.'
- <em>Enforce:</em> 'Accountability this time is verified by hard financial commitments.'
- <em>Reconnect:</em> 'I am happy to share the PO tracking link with your union leads right after this meeting.'`
      },
      {
        id: "m6-l6",
        marks: "15 Marks",
        type: "Comprehensive Virtual Delivery Strategy",
        question: "Design an Enterprise Virtual Presentation Framework for a multinational company. Address camera psychology, audio fidelity, audience interaction protocols, handling screen fatigue, and contingency management.",
        answer: `<strong>ENTERPRISE VIRTUAL PRESENTATION FRAMEWORK (REMOTE & HYBRID)</strong>

<strong>1. The Technical Rig & Camera Psychology:</strong>
- <em>Eye-Line Elevation:</em> Webcams must sit precisely at eye level. Looking down conveys condescension or boredom; looking up conveys helplessness.
- <em>The 80-20 Gaze Ratio:</em> Presenters must spend 80% of their speaking time looking directly into the physical webcam lens rather than at gallery faces, giving every remote attendee the psychological experience of direct 1-on-1 eye contact.
- <em>Acoustic Engineering:</em> Mandate external directional microphones (cardioid pattern) positioned 6 inches from the mouth. Poor audio causes cognitive depletion and damages perceived competence.

<strong>2. Overcoming 'Zoom Fatigue' & Attention Wandering:</strong>
- <em>The 4-Minute Reset Rule:</em> Human attention in video calls drops sharply after 4 minutes of uninterrupted monologue. Every 4 minutes, the presenter must trigger a cognitive reset: an interactive chat prompt, a live poll, an unmuted question, or a provocative slide change.
- <em>Dual-Monitor Workflow:</em> Screen 1 displays the minimalist slide deck; Screen 2 displays the video gallery and chat stream, allowing the presenter to monitor visual feedback cues (nods, confusion) in real time.

<strong>3. AV Contingency & Failure Protocols:</strong>
- <em>Designated Tech Co-Host:</em> Never present and manage Zoom links alone. A dedicated co-host manages chat queries, admits attendees, and mutes accidental audio feedback.
- <em>The Cloud Redundancy Backup:</em> Upload presentations to a shared cloud drive. If the presenter's screen freezes, the co-host advances slides while the presenter dials in via telephone audio without interrupting the flow.`
      }
    ],
    mcqs: [
      {
        id: "m6-mcq1",
        question: "Which presentation delivery method is planned and practiced using brief notes or cues rather than being read or memorized?",
        options: [
          "Manuscript delivery",
          "Impromptu delivery",
          "Extemporaneous delivery",
          "Memorisation delivery"
        ],
        correct: 2,
        explanation: "Extemporaneous delivery is carefully planned and practiced using structured notes, allowing natural eye contact and adaptability."
      },
      {
        id: "m6-mcq2",
        question: "What is the primary psychological question summarized by the WIIFM acronym in audience analysis?",
        options: [
          "Why is it factually mandated?",
          "What is in it for me?",
          "Where is information first managed?",
          "When is implementation finally measured?"
        ],
        correct: 1,
        explanation: "WIIFM stands for 'What's In It For Me?'—the core question every audience member considers."
      },
      {
        id: "m6-mcq3",
        question: "In Guy Kawasaki's 10/20/30 rule, what does the number '30' recommend?",
        options: [
          "A presentation should have at most 30 slides",
          "The presentation should last 30 minutes",
          "The minimum font size on slides should be 30 points",
          "There should be at least 30 references cited"
        ],
        correct: 2,
        explanation: "Kawasaki recommends using a font size of at least 30 points to keep slides readable and prevent excessive text."
      },
      {
        id: "m6-mcq4",
        question: "Which delivery method is essential for high-stakes occasions like diplomatic speeches or earnings calls where exact phrasing is legally required?",
        options: [
          "Extemporaneous delivery",
          "Impromptu delivery",
          "Manuscript delivery",
          "Outlining delivery"
        ],
        correct: 2,
        explanation: "Manuscript delivery involves reading word-for-word to ensure precision during legally sensitive announcements."
      },
      {
        id: "m6-mcq5",
        question: "The 'Split-Attention Effect' in presentation slide design occurs when:",
        options: [
          "The presenter splits time evenly between two topics",
          "Audience members must read dense text while simultaneously listening to the speaker",
          "The projector displays two different slides at once",
          "The speaker shifts between two microphones"
        ],
        correct: 1,
        explanation: "Split-attention occurs when an audience tries to read full paragraphs and listen to a speaker at the same time, overloading mental processing."
      },
      {
        id: "m6-mcq6",
        question: "In the LADDER framework for Q&A sessions, what does the letter 'A' stand for?",
        options: [
          "Argue",
          "Acknowledge",
          "Accelerate",
          "Analyze"
        ],
        correct: 1,
        explanation: "In the LADDER model, 'A' stands for Acknowledge—validating the question politely before responding."
      },
      {
        id: "m6-mcq7",
        question: "If an executive presenter does not know the answer to a question during a live presentation, the best response is:",
        options: [
          "Guess based on general intuition",
          "Ignore the question and move to the next slide",
          "Acknowledge that they do not have the verified data and commit to following up with the answer",
          "Blame a subordinate for not providing the numbers"
        ],
        correct: 2,
        explanation: "Honesty preserves credibility. Acknowledge that the data isn't at hand and commit to providing it shortly."
      },
      {
        id: "m6-mcq8",
        question: "What is the first step in the 4 Ps presentation cycle?",
        options: [
          "Practice",
          "Preparation",
          "Planning",
          "Performance"
        ],
        correct: 2,
        explanation: "Planning is the foundational first step where objectives, audience needs, and constraints are defined."
      },
      {
        id: "m6-mcq9",
        question: "What physical area is considered the ideal 'Power Zone' for expressive hand gestures during presentations?",
        options: [
          "Above the head",
          "Below the knees",
          "Between the waist and chest level",
          "Behind the speaker's back"
        ],
        correct: 2,
        explanation: "The power zone between waist and sternum allows natural, open hand gestures that look confident and composed."
      },
      {
        id: "m6-mcq10",
        question: "When audience members start checking phones or slouching, the most effective real-time adjustment is to:",
        options: [
          "Reprimand the audience firmly",
          "Change vocal cadence, ask a direct question, or share a relevant example",
          "Speak louder and faster without pausing",
          "Skip directly to the final slide"
        ],
        correct: 1,
        explanation: "Shifting vocal tone, posing an engaging question, or introducing a concrete story re-engages audience attention."
      },
      {
        id: "m6-mcq11",
        question: "In presentation design, the 'Glance Test' formulated by Nancy Duarte states that a slide should be understood within:",
        options: [
          "3 seconds",
          "30 seconds",
          "1 minute",
          "3 minutes"
        ],
        correct: 0,
        explanation: "The Glance Test requires that audience members grasp a slide's meaning within 3 seconds."
      },
      {
        id: "m6-mcq12",
        question: "What does the acronym 'STAR Moment' stand for in Nancy Duarte's keynote architecture?",
        options: [
          "Standard Timing And Review",
          "Something They'll Always Remember",
          "Strategic Tactics And Results",
          "Systematic Target Audience Research"
        ],
        correct: 1,
        explanation: "A STAR moment stands for 'Something They'll Always Remember'—a memorable visual demonstration or prop."
      },
      {
        id: "m6-mcq13",
        question: "In virtual video presentations (Zoom/Teams), the speaker establishes perceived direct eye contact with the audience by looking at:",
        options: [
          "The face of the most senior executive on their monitor",
          "Their own video self-view thumbnail",
          "Directly into the physical webcam lens",
          "The keyboard"
        ],
        correct: 2,
        explanation: "Looking directly into the webcam lens creates the psychological experience of direct eye contact for remote viewers."
      },
      {
        id: "m6-mcq14",
        question: "What is the primary danger of delivering a high-stakes presentation using complete verbatim memorisation?",
        options: [
          "The slides will fail to advance",
          "If the speaker forgets a single keyword, they may blank out completely and sound robotic",
          "The audience will interrupt with questions",
          "It takes less time to prepare"
        ],
        correct: 1,
        explanation: "Memorisation risks catastrophic cognitive blanking under adrenaline stress and sounds mechanical."
      },
      {
        id: "m6-mcq15",
        question: "Which of the following slide designs best complies with Mayer's Cognitive Load Theory?",
        options: [
          "A slide with five paragraphs copied directly from a technical report",
          "A slide with a single high-resolution diagram, minimal keywords, and the speaker delivering the explanation orally",
          "A slide with 12 bullet points in 10-point font",
          "A slide with animated clipart and flashing colors"
        ],
        correct: 1,
        explanation: "Visual graphics paired with oral explanation utilize separate cognitive channels without triggering split-attention."
      },
      {
        id: "m6-mcq16",
        question: "What is the recommended maximum duration of uninterrupted monologue in a virtual presentation before triggering an interactive reset?",
        options: [
          "4 minutes",
          "15 minutes",
          "30 minutes",
          "45 minutes"
        ],
        correct: 0,
        explanation: "Research shows virtual attention wanders after 4 minutes without interaction (polls, chat prompts, questions)."
      },
      {
        id: "m6-mcq17",
        question: "In presentation stagecraft, what does 'Podium Trapping' refer to?",
        options: [
          "A mechanical malfunction of a raised podium",
          "A speaker gripping the lectern as a physical shield due to anxiety, separating themselves from the audience",
          "Forgetting to bring notecards to the podium",
          "Walking too fast across the stage"
        ],
        correct: 1,
        explanation: "Podium trapping is clutching the lectern defensively, creating a physical and psychological barrier."
      },
      {
        id: "m6-mcq18",
        question: "Which stage in the LADDER Q&A technique involves paraphrasing or clarifying a complex or hostile question for the entire room?",
        options: [
          "Listen",
          "Acknowledge",
          "Deconstruct",
          "Deliver"
        ],
        correct: 2,
        explanation: "Deconstruct involves breaking down and clarifying convoluted questions before answering."
      },
      {
        id: "m6-mcq19",
        question: "In slide visual design, which font category is universally recommended for maximum readability from a distance?",
        options: [
          "Clean Sans-Serif fonts (e.g., Inter, Helvetica, Arial)",
          "Elaborate Gothic script fonts",
          "Times New Roman with heavy serifs",
          "Monospaced typewriter fonts"
        ],
        correct: 0,
        explanation: "Sans-serif typefaces lack decorative strokes, ensuring crisp readability on screens and projectors."
      },
      {
        id: "m6-mcq20",
        question: "In executive presentation planning, what is the 'Rule of One'?",
        options: [
          "Only one person is allowed in the room",
          "A presentation must be built around one single, unforgettable core idea or unifying takeaway",
          "A speaker may only speak for one minute",
          "Only one slide may be used in total"
        ],
        correct: 1,
        explanation: "The Rule of One requires centering the entire presentation on one big core idea that audiences take away."
      }
    ]
  }
};
