import "~/sass/style.scss";
import Image from "../common/Image";
import html from "~/assets/HTML.svg";
import css from "~/assets/CSS.svg";
import js from "~/assets/JS.svg";
import mysql from "~/assets/MySql.svg";
import react from "~/assets/React.svg";
import redux from "~/assets/Redux.svg";

export default function Technologies() {
  return (
    <div className="orbit">
      <ul>
        <li>
          <div>
            <Image img_src="~/assets/analytics.svg" width="50" height="50" />
          </div>
        </li>
        <li>
          <div>
            <Image img_src="~/assets/calendar.svg" width="50" height="50" />
          </div>
        </li>
        <li>
          <div>
            <Image img_src={mysql} width="50" height="50" />
          </div>
        </li>
        <li>
          <div>
            <Image img_src={redux} width="50" height="50" />
          </div>
        </li>
        <li>
          <div>
            <Image img_src={react} width="50" height="50" />
          </div>
        </li>
        <li>
          <div>
            <Image img_src={js} width="50" height="50" />
          </div>
        </li>
        <li>
          <div>
            <Image img_src={css} width="50" height="50" />
          </div>
        </li>
        <li>
          <div>
            <Image img_src={html} width="50" height="50" />
          </div>
        </li>
      </ul>
    </div>
  );
}
