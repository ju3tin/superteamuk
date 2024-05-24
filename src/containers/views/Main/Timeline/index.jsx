import React from 'react'

  const data = `
  <!-- Demo -->
  <div id="timeline-embed">
      <div id="timeline"></div>
  </div>
  <link rel="stylesheet" href="//cdn.knightlab.com/libs/timeline3/latest/css/timeline.css">
  <link rel="stylesheet" href="//cdn.knightlab.com/libs/timeline3/latest/css/timeline.css">
  <script type="text/javascript" src="/js/timeline-min.js"></script>
  <script>
      $(document).ready(function() {
          var embed = document.getElementById('timeline-embed');
          embed.style.height = getComputedStyle(document.body).height;
          window.timeline = new TL.Timeline('timeline-embed', '/js/timeline3.json', {
              hash_bookmark: false
          });
          window.addEventListener('resize', function() {
              var embed = document.getElementById('timeline-embed');
              embed.style.height = getComputedStyle(document.body).height;
              timeline.updateDisplay();
          })
      });
  </script>
  `;

export default () => (
    <div
    dangerouslySetInnerHTML={{__html: data}}
  />
)