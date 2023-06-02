(function() {
  var rightPanel = document.getElementById('acqulo-section');

  // Here i Created a button element
  var rewardsButton = document.createElement('button');
  var html=`
  <div class="wakefit-rewards" style="margin-bottom: 0px;">
  <div class="reward-section">
    <div role="button" aria-hidden="true">
      <div class="rewards">
        <div class="reward-section">
          <div class="logo-reward">
            <img src="https://wakefit-co.s3.ap-south-1.amazonaws.com/consumer-react/assets/wakefit_logo_expanded.svg" alt="logo">
            <h4>Rewards</h4>
          </div>
          <div class="reward-free">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: green; font-size: 24px; padding-bottom: 5px;">
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z">
              </path>
            </svg>FREE
          </div>
        </div>
        <hr style="border: 1px solid rgb(201, 172, 151); height: 0px; margin: 0px;">
        <div class="content">
          <span>Free Wakefit Rewards coupons worth</span>
          <b>₹8,000</b> <span> across <b>24+ brands</b> with this purchase</span>
          <p><b>Know More</b></p>
        </div>
      </div>
    </div>
  </div>
</div>`;
var newbtn=`<button>open</button>`;
  rewardsButton.innerHTML = html;
  //Dynamically  for rightpanel
  var newpanel = document.createElement('div');
  newpanel.id = 'right-panel';
  newpanel.className = 'panel';
  document.body.appendChild(newpanel);

  rewardsButton.addEventListener('click', function() {
    panelopen(newpanel);
  });

  function panelopen(newpanel) {
    newpanel.classList.toggle('open'); 
  }

  window.clientfunc = function(clientid, clientsecret) {
    console.log(clientid);
    console.log(clientsecret);
  };
  rightPanel.appendChild(rewardsButton);
})();
