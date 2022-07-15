import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://doc-08-5k-docs.googleusercontent.com/docs/securesc/1s8hdlkikls7qdpjilqao1df156q1e0e/q7rg9fmkqkerfifgdaiks900094qnm3c/1657916250000/04393879493545117233/04393879493545117233/1TjGZ3SjdQ-uNjybPXB4sKxJxjzSHhhh9?e=download&ax=ACxEAsY2MBaXZLEffnhTFAhDPawZ8CgZM0i-Cd1ZU3pHhRyMxFDMT91BujZTy0PVkwi7vZgLOEtoZ3LNmfkcDVyeNgOa2IS6Wt4Wtc75p4le10TWCh_9GIPDQx9LPHcGNUIra1Ez55NVn-OISqDwcw8SaEyTGaMAWLdG6bTMZYSM1CFhgw-EUnCuc4H-0C7SfBGRsvu4-3P-pJL9Noztc3Tym1_6HYtz0ZrGLuei1vtEiaQAmuKgrO4GsJqsHcgNXP5P25CXp6H2ze-bgVmU7Ca6XO1OXdvZyccVl-H5oLepDox49WE5Cekd-R5qwBFJeZeaqGUpp1SGFcU7I-EHbx0Pl-xyKjohgMoxvbd_rNHxa4AW4Ym-LMFtwRq7_ciuCfoAVa6Jcb7A90OjL4kIwUrcOliXGR70YRq0WlvGvp8YF5UDimNaI4LYguFwrKL7YbYkJfm0yJafCDIH0NYMr5G8qAmK8jE0KOB0CH7xFCG6yJUp-No1NS5PR_b8T4IRt9-CAkH1sv3UMKqmeGUyYoaIEgL-nNK3JsCMLoXXa0JHNJiM1rUqJmt9JOgs_l1YElJ8WqitH2cCx6nQgFlY0v3w0zFY7A7I4avsSkCpaOjgJU-A43gf90fDQF9JdsKY-Uq7tgcRXHf0wSpyCCdqJEYvXQJkYJ1zUOt7PwiK3uasTmxbvG9XUPevK8ertTR_pPnK8b905Pgyy8zHInCwjJYS7_PsQg61YzgCwyz-wbSPF1DbnB9Ba95nmNg3AXQSVcvrLxYyF96D_sYMAYtq3Wv28-GG&uuid=64bfdf26-5c46-4ab6-bcdd-8bc81220f31f&authuser=3&nonce=r767up7gie7v2&user=04393879493545117233&hash=3u93o3af76dslao9f5iripanq2co3taj";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
