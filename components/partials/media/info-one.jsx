import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Contents } from '~/contents/contents';

import ALink from '~/components/features/alink';

function InfoOne ( props ) {
    const { product, pName, subPName } = props;
    const contentArray = Contents[pName][subPName];

    console.log(contentArray);

    if(!contentArray || contentArray.length === 0)   {
        return <h3>Service is unavailable</h3>
    }

    console.log("Info one = ", pName, subPName);

    const setRating = ( e ) => {
        e.preventDefault();

        if ( e.currentTarget.parentNode.querySelector( '.active' ) ) {
            e.currentTarget.parentNode.querySelector( '.active' ).classList.remove( 'active' );
        }

        e.currentTarget.classList.add( 'active' );
    }


    return (
        <Tabs selectedTabClassName="show" selectedTabPanelClassName="active show">
            <div className="product-details-tab">
                <TabList className="nav nav-pills justify-content-between">
                    <Tab className="nav-item">
                        <span className="nav-link"> Description</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link"> Working</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Reason</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link" >Reviews (2)</span>
                    </Tab>
                </TabList>

                <div className="tab-content">
                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <h3>{contentArray[0].title}</h3>
                            {
                                contentArray[0].content.length !== 1 ?
                                contentArray[0].content.map((item, idx) => <p key={idx}>{item}</p>)
                                :
                                contentArray[0].content[0].split('.').map((item, idx) => <p key={idx}>{item}</p>)
                            }

                            {
                                contentArray[0].liContent &&
                                <ul>
                                    {
                                        contentArray[0].liContent.map(item => <li>{item}</li>)
                                    }
                                </ul>
                            }

                            {
                                contentArray[0].subContent && (contentArray[0].subContent.length !== 1 ?
                                contentArray[0].subContent.map(item => <p>{item}</p>)
                                :
                                contentArray[0].subContent[0].split('.').map(item => <p>{item}</p>))
                            }
                            
                            
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            
                        <h3>{contentArray[1].title}</h3>
                            {
                                contentArray[1].content.length !== 1 ?
                                contentArray[1].content.map((item, idx) => <p key={idx}>{item}</p>)
                                :
                                contentArray[1].content[0].split('.').map((item, idx) => <p key={idx}>{item}</p>)
                            }

                            {
                                contentArray[1].liContent &&
                                <ul>
                                    {
                                        contentArray[1].liContent.map(item => <li>{item}</li>)
                                    }
                                </ul>
                            }

                            {
                                contentArray[1].subContent && (contentArray[1].subContent.length !== 1 ?
                                contentArray[1].subContent.map(item => <p>{item}</p>)
                                :
                                contentArray[1].subContent[0].split('.').map(item => <p>{item}</p>))
                            }
                            

                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                        <h3>{contentArray[2].title}</h3>
                            {
                                contentArray[2].content.length !== 1 ?
                                contentArray[2].content.map((item, idx) => <p key={idx}>{item}</p>)
                                :
                                contentArray[2].content[0].split('.').map((item, idx) => <p key={idx}>{item}</p>)
                            }

                            {
                                contentArray[2].liContent &&
                                <ul>
                                    {
                                        contentArray[2].liContent.map(item => <li>{item}</li>)
                                    }
                                </ul>
                            }

                            {
                                contentArray[2].subContent && (contentArray[2].subContent.length !== 1 ?
                                contentArray[2].subContent.map(item => <p>{item}</p>)
                                :
                                contentArray[2].subContent[0].split('.').map(item => <p>{item}</p>))
                            }
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane">
                        <div className="reviews">
                            <h3>Reviews (2)</h3>
                            <div className="review">
                                <div className="row no-gutters">
                                    <div className="col-auto">
                                        <h4><ALink href="#">Samanta J.</ALink></h4>

                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={ { width: '100%' } }></div>
                                                <span className="tooltip-text">{ 100 }</span>
                                            </div>
                                        </div>
                                        <span className="review-date mb-1">6 days ago</span>
                                    </div>
                                    <div className="col">
                                        <h4>Good, perfect size</h4>

                                        <div className="review-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="review" >
                                <div className="row no-gutters">
                                    <div className="col-auto">
                                        <h4><ALink href="#">John Doe</ALink></h4>

                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={ { width: '100%' } }></div>
                                                <span className="tooltip-text">{ 100 }</span>
                                            </div>
                                        </div>

                                        <span className="review-date mb-1">5 days ago</span>
                                    </div>

                                    <div className="col">
                                        <h4>Very good</h4>

                                        <div className="review-content">
                                            <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reply">
                            <div className="title-wrapper text-left">
                                <h3 className="title title-simple text-left text-normal">Add a Review
													</h3>
                                <p>Your email address will not be published. Required fields are
														marked *</p>
                            </div>
                            <div className="rating-form">
                                <label htmlFor="rating" className="text-dark">Your rating * </label>
                                <span className="rating-stars selected">
                                    { [ 1, 2, 3, 4, 5 ].map( ( num, index ) =>
                                        <a className={ `star-${num}` } href="#" onClick={ setRating } key={ 'star-' + index }>{ num }</a>
                                    ) }
                                </span>

                                <select name="rating" id="rating" required=""
                                    style={ { display: 'none' } }>
                                    <option value="">Rate…</option>
                                    <option value="5">Perfect</option>
                                    <option value="4">Good</option>
                                    <option value="3">Average</option>
                                    <option value="2">Not that bad</option>
                                    <option value="1">Very poor</option>
                                </select>
                            </div>
                            <form action="#">
                                <textarea id="reply-message" cols="30" rows="6"
                                    className="form-control mb-2" placeholder="Comment *"
                                    required></textarea>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="reply-name"
                                            name="reply-name" placeholder="Name *" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" id="reply-email"
                                            name="reply-email" placeholder="Email *" required />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </TabPanel>
                </div>
            </div>
        </Tabs>
    );
}

export default React.memo( InfoOne );