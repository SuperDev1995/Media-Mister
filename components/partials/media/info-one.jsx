import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ALink from '~/components/features/alink';

function InfoOne ( props ) {
    const { product } = props;

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
                            <h3>Buy TikTok Comments</h3>
                            <p className="pb-1">TikTok continues to go from strength to strength as the short video sharing platform of the moment. If looking to enhance the impact and appeal of your videos, why not buy TikTok comments online?</p>
                            <br/>
                            <h3>What Are TikTok Comments?</h3>
                            {/* <ul>
                                <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                                <li>Vivamus finibus vel mauris ut vehicula.</li>
                                <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                            </ul> */}
                            <p>TikTok comments are submitted by those who have watched your videos and have something to say. Comments can be left for any reason - praise, criticism, and general commentary. But what’s consistent with all comments is their appeal and influence over other TikTok users.When you come across a TikTok video with a bunch of comments, you’re instantly intrigued. If so many people have taken the time to comment, the video must be worth checking out. The same also goes for the publisher, along with the rest of their catalog of content.
Or at least, that’s how it’s interpreted by almost every TikTok user worldwide. Comments never fail to get people talking and generate engagement. They’re also great for encouraging others to comment on your posts, keeping the conversation going. It’s just that with traditional organic comments, you could be waiting around for something that may never happen.</p>
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <h3>Why Buy Comments on TikTok?</h3>
                            <p>The alternative - and a surprisingly popular option - is to buy TikTok comments. In doing so, you get to control the content of the comments and get the conversation started. When you buy comments on TikTok, they can be used to send almost any message you like.
You can say something positive about your content, say something controversial, or aim for something inspiring. You could ask a question, highlight something of interest in your video or respond to haters.
With custom TikTok comments, anything is possible! It’s also worth remembering that comments have a direct effect on exposure and visibility on TikTok. The platform’s automated indexation system is programmed to promote and recommend content that’s relevant, popular, or trending.
When videos generate discussion, they get picked up on and promoted by TikTok. Two major benefits from one simple promotional strategy, which also happens to be cheap, fast, and 100% safe.</p>

                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <h3>Why Buy TikTok Comments from Media Mister?</h3>
                            <p>Because we understand and acknowledge the importance of quality, safety, and discretion, we exclusively sell 100% authentic TikTok comments, written and delivered by our own team of experts. Every comment is 100% relevant, 100% unique, and 100% indistinguishable from an organic comment.
What’s more, we also offer the option of custom comments, enabling you to tailor the content of your comments personally. Just a few of our most popular packages of TikTok comments currently available include the following:</p>
                            <ul>
                                <li>10 TikTok comments delivered within 1-2 working days </li>
                                <li>25 TikTok comments delivered within 1-3 working days</li>
                                <li>50 TikTok comments delivered within 1-3 working days</li>
                                <li>100 TikTok comments delivered within 2-4 working days</li>
                                <li>250 TikTok comments delivered within 2-4 working days</li>
                                <li>500 TikTok comments delivered within 4-7 working days</li>
                                <li>1000 TikTok comments delivered within 7-12 working days</li>
                            </ul>
                            <p>Don’t forget - every purchase is covered by a full money-back guarantee for total peace of mind. Place your order online, or chat with our customer support team anytime for more information.</p>
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