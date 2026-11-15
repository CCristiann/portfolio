// Articolo scritto a mano: GeniusHub è privato, quindi niente README da GitHub.
// Basato su quanto è pubblico su geniushub.it: rivedi e arricchisci i dettagli
// tecnici (scelte, numeri, problemi risolti) che puoi condividere.

export default function GeniusHubArticle() {
  return (
    <>
      <h2 id="the-problem">The problem</h2>
      <p>
        University life in Italy is scattered. Course notes live on Drive,
        deadlines in group chats, notices on the university website, study
        groups on WhatsApp and room listings on Facebook. GeniusHub started
        inside the university, from students who were tired of jumping between
        all of them, with one idea: <strong>study better, and live the
        university</strong>, from one place.
      </p>

      <h2 id="the-product">The product</h2>
      <p>GeniusHub has two halves.</p>
      <ul>
        <li>
          <strong>Genius Lab</strong> turns your own course material into study
          tools: summaries, concept maps, flashcards, quizzes and mock exams
          generated from your lectures, plus <em>Chiedi a Genius</em>, a chat
          that answers questions from your files and cites the exact source and
          page. A planner builds daily study sessions around your exam dates.
        </li>
        <li>
          <strong>Genius Social</strong> is the campus side: a notice board with
          your university&apos;s announcements and events, course groups with
          shared notebooks, housing listings near campus, and jobs and
          internships.
        </li>
      </ul>
      <p>
        It runs in any browser on desktop, tablet or phone, and can be added to
        the home screen like an app. Accessibility is a requirement, not an
        afterthought: high-readability fonts, high contrast and reduced motion,
        built together with NeuroSphere.
      </p>

      <h2 id="my-role">My role</h2>
      <p>
        I&apos;m the CTO. I own the technical side end to end: architecture,
        the AI pipeline, the data model and the product code, and I work with
        the founders on what to build next and in what order.
      </p>

      <h2 id="stack">Stack</h2>
      <ul>
        <li>
          <strong>Next.js</strong> and <strong>TypeScript</strong> across the
          whole app, with <strong>tRPC</strong> for end-to-end type-safe APIs.
        </li>
        <li>
          <strong>Supabase</strong> (Postgres, auth, storage) with{" "}
          <strong>Drizzle</strong> as the ORM.
        </li>
        <li>
          <strong>Vercel AI SDK</strong> for model calls, streaming and
          structured output.
        </li>
      </ul>

      <h2 id="rag-pipeline">The RAG pipeline</h2>
      <p>
        Everything in Genius Lab depends on one thing: finding the right
        passages in a student&apos;s material, and being honest about where an
        answer comes from. I designed the retrieval pipeline around that.
      </p>
      <ol>
        <li>
          <strong>Multi-format ingestion.</strong> Students upload PDFs, Word
          documents, slides, images, YouTube videos, web pages and pasted text.
          Each format is normalised to text with its structure preserved
          (pages, headings, slides), so a citation can point back to a real
          place in the original file.
        </li>
        <li>
          <strong>Contextual chunking.</strong> Lecture notes are full of
          chunks that make no sense alone (&ldquo;as shown above, the
          elasticity is…&rdquo;). Each chunk is stored with the context of
          the document and section it belongs to, so it can still be found and
          understood on its own.
        </li>
        <li>
          <strong>Retrieval and reranking.</strong> A first retrieval pass
          gathers candidate passages, then a reranker orders them by how well
          they actually answer the question, so the model sees fewer and better
          passages.
        </li>
        <li>
          <strong>Cited answers.</strong> Answers are grounded in the retrieved
          passages and cite them, down to file and page (for example{" "}
          <code>Lezione 7 · Elasticità.pdf, p. 18</code>), so a student can
          always check the source instead of trusting the model.
        </li>
      </ol>
      <p>
        The same retrieval layer feeds the generators: summaries, concept maps,
        flashcards and mock exams are built from the student&apos;s own
        material rather than from what the model happens to know, and mock
        exams are graded automatically.
      </p>

      <h2 id="privacy">Privacy</h2>
      <p>
        Students upload their own notes, so the rule is simple: their material
        is used only to provide the service, and never to train AI models,
        ours or anyone else&apos;s.
      </p>

      <h2 id="whats-next">What&apos;s next</h2>
      <p>
        GeniusHub is live at{" "}
        <a href="https://geniushub.it" target="_blank" rel="noopener noreferrer">
          geniushub.it
        </a>
        . The goal is to follow students through the whole of university, from
        the first exam to the first job.
      </p>
    </>
  );
}
