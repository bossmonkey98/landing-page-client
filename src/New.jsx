import * as React from "react";

export const LandingPage =()=> {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="column">
            <div className="div-3">
              <div className="div-4">

               
                <div className="div-10">Testimonials</div>
              </div>
              <div className="div-11">
                <div className="div-12" />
                <div className="div-13">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/40eabe3a97322b7bd2bdc4b39ff1770440492678dceb3d4ade927aa785fbc9d1?apiKey=381fc8579b114fc6a0a6eb93cf5631cc&"
                    className="img-4"
                    alt=""
                  />
                  <div className="div-14">
                    <div className="div-15">
                      <div className="div-16">Jack F</div>
                      <div className="div-17">Ex Blackrock PM</div>
                    </div>
                    <div className="div-18">
                      “Love how Loch integrates portfolio analytics and whale
                      watching into one unified app.”
                    </div>
                  </div>
                  <div className="div-19">
                    <div className="div-20">
                      <div className="div-21">Yash P</div>
                      <div className="div-22">
                        Research, 3poch Crypto Hedge Fund
                      </div>
                    </div>
                    <div className="div-23">
                      “I use Loch everyday now. I don't think I could analyze
                      crypto whale trends markets without it. I'm addicted!”
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-4">
            <div className="div-24">
              <div className="div-25">
                <div className="div-26">
                  <div className="div-27">Sign up for  exclusive access.</div>
                  <div className="div-28">Your email address</div>
                  <div className="div-29">Get started</div>
                </div>
                <div className="div-30">
                  You’ll receive an email with an invite link to join.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: var(--grey-900, #19191a);
        }
        .div-2 {
          display: flex;
        }
        @media (max-width: 991px) {
          .div-2 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 60%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-3 {
          background: radial-gradient(
            92.19% 89.74% at 32.27% 91.27%,
            rgba(31, 169, 17, 0.81) 17.21%,
            #2f15d0 64.58%,
            rgba(0, 0, 0, 0) 100%
          );
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 100%;
          padding: 47px 0;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
          }
        }
        .div-4 {
          display: flex;
          flex-direction: column;
          align-items: end;
          padding: 0 62px;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-5 {
          align-self: stretch;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            padding-right: 20px;
          }
        }
        .div-6 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-6 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 47%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-7 {
          display: flex;
          margin-top: 42px;
          flex-direction: column;
          align-items: start;
        }
        @media (max-width: 991px) {
          .div-7 {
            margin-top: 40px;
          }
        }
        .img {
          aspect-ratio: 1.13;
          object-fit: contain;
          object-position: center;
          width: 36px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-8 {
          color: var(--Background---F2F2F2, #f2f2f2);
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          align-self: stretch;
          margin-top: 16px;
          font: 500 31px/37px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-9 {
          color: var(--Background---F2F2F2, #f2f2f2);
          align-self: stretch;
          margin-top: 19px;
          font: 500 16px/19px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 53%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .img-2 {
          aspect-ratio: 1.34;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-2 {
            margin-top: 11px;
          }
        }
        .img-3 {
          aspect-ratio: 2.7;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: stretch;
          margin-top: 61px;
        }
        @media (max-width: 991px) {
          .img-3 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-10 {
          color: var(--Background---F2F2F2, #f2f2f2);
          text-align: right;
          width: 400px;
          max-width: 100%;
          margin: 27px 148px 0 0;
          font: 500 25px/30px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            margin-right: 10px;
          }
        }
        .div-11 {
          display: flex;
          flex-direction: column;
          margin: 25px 0 10px;
          padding: 0 62px;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-12 {
          background-color: rgba(229, 229, 230, 0.5);
          height: 1px;
        }
        @media (max-width: 991px) {
          .div-12 {
            max-width: 100%;
          }
        }
        .div-13 {
          display: flex;
          margin-top: 40px;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 60px;
          fill: #fff;
          overflow: hidden;
          margin-top: 77px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .img-4 {
            margin-top: 40px;
          }
        }
        .div-14 {
          border-radius: 12px;
          box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04),
            0px 4px 10px 0px rgba(0, 0, 0, 0.04);
          background-color: var(--White, #fff);
          align-self: stretch;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          padding: 20px;
        }
        .div-15 {
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }
        .div-16 {
          color: var(--grey-900, #19191a);
          white-space: nowrap;
          font: 600 16px/19px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-16 {
            white-space: initial;
          }
        }
        .div-17 {
          color: var(--grey-400, #96979a);
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 500 13px/16px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-17 {
            white-space: initial;
          }
        }
        .div-18 {
          color: var(--text-5, #1d2129);
          margin-top: 20px;
          font: 500 16px/19px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-19 {
          border-radius: 12px;
          box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04),
            0px 4px 10px 0px rgba(0, 0, 0, 0.04);
          background-color: var(--White, #fff);
          align-self: stretch;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          padding: 20px;
        }
        .div-20 {
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }
        .div-21 {
          color: var(--grey-900, #19191a);
          white-space: nowrap;
          font: 600 16px/19px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-21 {
            white-space: initial;
          }
        }
        .div-22 {
          color: var(--grey-400, #96979a);
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 500 13px/16px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-22 {
            white-space: initial;
          }
        }
        .div-23 {
          color: var(--text-5, #1d2129);
          margin-top: 20px;
          font: 500 16px/19px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 40%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-24 {
          box-shadow: 0px 14px 64px -4px rgba(24, 39, 75, 0.12),
            0px 8px 22px -6px rgba(24, 39, 75, 0.12);
          background-color: #fff;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 50px 60px;
        }
        @media (max-width: 991px) {
          .div-24 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-25 {
          display: flex;
          width: 365px;
          max-width: 100%;
          flex-direction: column;
          margin: 327px 0 211px;
        }
        @media (max-width: 991px) {
          .div-25 {
            margin: 40px 0;
          }
        }
        .div-26 {
          display: flex;
          flex-direction: column;
          padding: 0 13px;
        }
        .div-27 {
          color: var(--grey-300, #b0b1b3);
          font: 500 39px/47px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-28 {
          color: var(--grey-200, #cacbcc);
          white-space: nowrap;
          align-items: start;
          border-radius: 8px;
          border: 1px solid var(--grey-100, #e5e5e6);
          box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04),
            0px 4px 10px 0px rgba(0, 0, 0, 0.04);
          background-color: #fff;
          margin-top: 41px;
          justify-content: center;
          padding: 20px 60px 20px 24px;
          font: 500 16px/19px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-28 {
            white-space: initial;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-29 {
          color: var(--White, #fff);
          text-align: center;
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          border: 1px solid var(--grey-900, #19191a);
          background-color: var(--grey-900, #19191a);
          margin-top: 24px;
          padding: 20px 60px;
          font: 600 16px/19px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-29 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-30 {
          color: var(--grey-900, #19191a);
          text-align: center;
          margin-top: 42px;
          white-space: nowrap;
          font: 600 16px/19px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-30 {
            margin-top: 40px;
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
}


