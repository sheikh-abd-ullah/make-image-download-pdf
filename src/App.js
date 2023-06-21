import html2canvas from 'html2canvas';
import './App.css'
import jsPDF from 'jspdf';

function App() {

  const downloadPdf = ()=>{
    const capture = document.querySelector('.container')
    
    html2canvas(capture).then((canvas)=>{
      console.log(capture)
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm' , 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();

      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      doc.save('camelcontent.pdf')
    })
  }



  return (
    <div className="App">
      <div className="container">
        <div>
          <header className="header">
            <h1>Mr. Camel</h1>
          </header>
          <aside className="left">
            <ul>
              <li>
                <a className="active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#career">Career</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
            <br />
            <br />
            <p>
              "Do something important in life. I convert green grass to code."
              <br />- Mr Camel
            </p>
          </aside>
          <main className="content">
            <h2>About Me</h2>
            <p>
              I don't look like some handsome horse, but I am a real desert
              king. I can survive days without water.
            </p>
            <h2>My Career</h2>
            <p>
              I work as a web developer for a company that makes websites for
              camel businesses.
            </p>
            <hr />
            <br />
            <h2>How Can I Help You?</h2>

            <form>
              <label>
                Email: <input type="text" name="email" />
              </label>
              <br />
              <label>
                {" "}
                Mobile: <input type="text" name="mobile" />{" "}
              </label>
              <br />
              <textarea name="comments" rows="4">
                Enter your message
              </textarea>
              <br />
              <input type="submit" value="Submit" />
              <br />
            </form>
          </main>
          <footer className="footer">&copy; Copyright Mr. Camel</footer>
        </div>
        <br />
        <br />
        <button className="download" onClick={downloadPdf}>
          Download
        </button>
      </div>
    </div>
  );
}

export default App;
