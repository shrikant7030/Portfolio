import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import  "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2016"
          iconStyle={{background:'#3e497a', color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Diploma </h3>
          <p>Vidya Vikas Pratishthan Polytechnic, Solapur</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2019"
          iconStyle={{background:'#3e497a', color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> B.E </h3>
          <p>Nagesh Karajagi Orchid College Of Engineering And Technology, Solapur</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          clsassName="vertical-timeline-element--work"
          date="Aug 2019 - April 2021"
          iconStyle={{background:'#3e497a', color: '#fff'}}
          icon={<WorkIcon />}>
            <h3 className="vertical-timeline-element-title"> Software Engineer </h3>
            <p> MyClan Services Private Limited, Pune </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
          clsassName="vertical-timeline-element--work"
          date="April 2021 - Present"
          iconStyle={{background:'#3e497a', color: '#fff'}}
          icon={<WorkIcon />}>
            <h3 className="vertical-timeline-element-title"> Software Engineer </h3>
            <p> TextMercato Solutions Private Limited, Bengaluru </p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience