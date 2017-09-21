// use export default for async wrap
function ToggleIcon(props) {
  if (!props.pr_toggled) {
    return (
      <span className="rkFaqList101_icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
      </span>
    );
  } else {
    return (
      <span className="rkFaqList101_icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M19 13H5v-2h14v2z"/>
      </svg>
      </span>
    );
  }
}

function Content(props) {
  if (props.pr_toggled) {
    return (
      <p className="rkFaqList101_ans">
        {props.pr_content}
      </p>
    );
  } else {
    return null;
  }
}

export default class RkFaqList1_01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faqList: [
        {
          title: "rkFaqList1-01_title1",
          content: "Lorem ipsum dolor sit amet1,...",
          toggled: false
        },
        {
          title: "rkFaqList1-01_title2",
          content: "Lorem ipsum dolor sit amet2,...",
          toggled: true
        }
      ]
    };

    // binders 
    
  }

  // lifecycle hooks
  componentDidMount() {
    this.toggleAllContent(false);
  }
  
  // methods
  toggleAllContent(visible) {
    let faqList= this.state.faqList;
    for (let i in faqList) {
      faqList[i].toggled = visible;
    }
  }

  toggleContent(index) {
    let faqList= this.state.faqList;
    faqList[index].toggled = !faqList[index].toggled;
    
    this.setState(prevState => ({
      toggled: faqList[index].toggled
    }));
    
  }
  
  render() {
    const faqList = this.state.faqList;
    return (
      <article className="rkFaqList101">
      <ul>
        {faqList.map((i, index) =>
          <li>
          <h2 className="rkFaqList101_title" onClick={() => { this.toggleContent(index) }}>
            {i.title}
            <ToggleIcon pr_toggled={faqList[index].toggled} />
          </h2>          
          <section>
            <Content pr_toggled={faqList[index].toggled} 
            pr_content={faqList[index].content} />
          </section>
        </li>
        )}
      </ul>
    </article>
    );
  }
}