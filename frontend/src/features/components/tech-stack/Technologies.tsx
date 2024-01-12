import "~/sass/style.scss";
import Image from "../common/Image";

import { useSkillsQuery } from "~/features/serivces/apiService";

export default function Technologies() {
  const { data } = useSkillsQuery(undefined);

  return (
    <div className="orbit">
      <ul>
        {data?.map((skill: string | any, id: number) => (
          <li key={id}>
            <div>
              <Image
                img_src={`http://127.0.0.1:8000${skill.skill_logo}`}
                width="30"
                height="30"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
