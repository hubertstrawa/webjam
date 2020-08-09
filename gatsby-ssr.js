const React = require("react");

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="webjam" data-description="Dziekuje za support! ☕️" data-message="" data-color="#BD5FFF" data-position="right" data-x_margin="18" data-y_margin="18"></script>
  ]);
};