import { connect } from 'react-redux';
import Accordion from './features/accordion/accordion';
import Card from './features/accordion/card';

const Question = ({faqlist, position, subname}) => {
    //const {title, questions, foot} = faqlist[position][subname];
    const {title, questions, foot} = faqlist["home"]["home"];

    if(!questions || questions.length === 0)  {
        return <></>
    }

    return(
        <div className="page-content">
        <div className="container">

    <h2 className="title mb-3 text-center">Frequently Asked Questions</h2>
            <p className="mb-3 text-center">{title}</p>

            <div className="row">
                <div className="col-12">
                    <Accordion adClass="accordion-plus">
                        {
                            questions.map((question,idx) => <Card key={idx} title={question.title} adClass="card-box card-sm bg-light">
                                {question.content}
                            </Card>)
                        }
                    </Accordion>
                </div>
            </div>
    <p className="mb-3 text-center">{foot}</p>
        </div>
    </div>
    );
}

const mapStateToProps = (state) =>  ({
    faqlist : state.faqlist
});

export default connect(mapStateToProps, null)(Question);