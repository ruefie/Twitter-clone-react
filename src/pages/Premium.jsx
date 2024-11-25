import React from "react";

const Premium = () => {
  return (
    <div className='main-content'>
      <h1>40% off a year of Premium</h1>
      <p>Our 2-year anniverary offer, ending:</p>

      <div>
        <div>
          <span>20</span>
          <h2>Days</h2>
        </div>
        <div>
          <span>12</span>
          <h2>Hours</h2>
        </div>
        <div>
          <span>12</span>
          <h2>Minutes</h2>
        </div>
        <div>
          <span>12</span>
          <h2>Seconds</h2>
        </div>
      </div>
      <div>
        <button>Annual</button>
        <button>Monthly</button>
      </div>
      <div>
       <div>
        <h2>Basic</h2>
        <p>Free</p>
        <ul>
          <li>Unlimited followers</li>
          <li>No ads</li>
          <li>No data usage</li>
          <li>No spam</li>
          <li>No private messages</li>
          <li>No DM limit</li>
        </ul>
       </div>
       <div>
        <h2>Pro</h2>
        <p>$5/month</p>
        <ul>
          <li>Unlimited followers</li>
          <li>No ads</li>
          <li>No data usage</li>
          <li>No spam</li>
          <li>No private messages</li>
          <li>No DM limit</li>
        </ul>
       </div>
       <div>
        <h2>Premium</h2>
        <p>$10/month</p>
        <ul>
          <li>Unlimited followers</li>
          <li>No ads</li>
          <li>No data usage</li>
          <li>No spam</li>
          <li>No private messages</li>
          <li>No DM limit</li>
        </ul>
       </div>
      </div>
      <footer>
        <div>
          <h2>Basic</h2>
          <p>Free</p>
        </div>
        <div>
          <button>Subscribe</button>
          <p>By subcribing, you agree to our Terms and Conditions.
            Subscriptions automatically renew. Cancel anytime.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Premium;
