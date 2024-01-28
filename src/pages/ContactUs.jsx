
import React from 'react'

export default function ContactUs() {
    return (
        <div class="content">
            <div class="container">
                <div class="row align-items-stretch justify-content-center no-gutters">
                    <div class="col-md-7">
                        <div class="form h-100 contact-wrap p-5">
                            <h3 class="text-center">Let's Talk</h3>
                            <form class="mb-5" method="post" id="contactForm" name="contactForm">
                                <div class="row">
                                    <div class="col-md-6 form-group mb-3">
                                        <label for="" class="col-form-label">Name *</label>
                                        <input type="text" class="form-control" name="name" id="name" placeholder="Your name" />
                                    </div>
                                    <div class="col-md-6 form-group mb-3">
                                        <label for="" class="col-form-label">Email *</label>
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your email" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12 form-group mb-3">
                                        <label for="budget" class="col-form-label">Subject</label>
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Your subject" />
                                    </div>
                                </div>

                                <div class="row mb-5">
                                    <div class="col-md-12 form-group mb-3">
                                        <label for="message" class="col-form-label">Message *</label>
                                        <textarea class="form-control" name="message" id="message" cols="30" rows="4" placeholder="Write your message"></textarea>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-5 form-group text-center">
                                        <input type="submit" value="Send Message" class="btn btn-block btn-primary rounded-0 py-2 px-4" />
                                        <span class="submitting"></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
