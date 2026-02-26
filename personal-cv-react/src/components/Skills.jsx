import { useState } from "react";

function Skills() {

  const [visible, setVisible] = useState(true);
  return (

    <section className="card">

      <button onClick={() => setVisible(!visible)}>
        Show/Hide Skills
      </button>

      {visible && (

        <>
          <h2>Skills</h2>

          <ul>

            <li>
              Web Development

              <ul>

                <li>
                  Frontend

                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>

                </li>

                <li>Backend</li>

              </ul>

            </li>

          </ul>

        </>

      )}

    </section>
  );
}

export default Skills;