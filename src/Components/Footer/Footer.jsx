import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">

        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        <div className="footer_data">
          <div className="col-lg-3 col-md-3 col-sm-6">
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
      <div className="col-lg-3 col-md-3 col-sm-6">
            <ul>
               <li>Media Center</li>
               <li>Privacy</li>
               <li>Contact Us</li>
              </ul>
      </div>
      </div>
          <div className="col-12 service_code">
            <p>Service Code</p>
          </div>

          <div className="col-12 copy-write">
              &copy; 1997-2024 Netflix, Inc.
          </div>
        
      </div>
    </div>
  );
}

export default Footer;
