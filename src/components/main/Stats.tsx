import React, { useState } from "react";
import { linearGradients } from "../../styles/colors";
import style from '../../styles/stats.module.css'

export const statsArray = [
  { metric: "User Satisfaction", pre: 70, post: 85, description: "Pre-Instructions: User satisfaction score of 70% based on customer surveys. Post-Instructions: User satisfaction score increased to 85%." },
  { metric: "Task Completion Rate", pre: 60, post: 80, description: "Pre-Instructions: 60% of users completed their intended task. Post-Instructions: 80% of users completed their intended task."},
  { metric: "Return Users", pre: 30, post: 45, description: "Pre-Instructions: 30% of users returned to the site within a month. Post-Instructions: 45% of users returned to the site within a month."},
  { metric: "Error Rate", pre: 20, post: 10, description: "Pre-Instructions: Average error rate in task completion was 20%. Post-Instructions: Error rate reduced to 10%." },
];

interface StatsProps {
  metric: string
  pre: number
  post: number
  description: string
}

const Stats = () => {
  const [stats, setStats] = useState<StatsProps[]>(statsArray);

  return (
  <div className={style.container}>
    <h1 className={style.title}>Instructions Stats</h1>
    {stats.map((stat, index) => (
      <div className={style.stats__container} key={index}>
        <div className={style.left__side}>
          <h3 style={{padding:0, margin:0}}>{stat.metric}</h3>
          <p style={{lineHeight:"30px"}}>{stat.description}</p>
        </div>

        <div className={style.right__side} style={{ display: 'flex', flexDirection:"column", gap: 10}}>
          {/* Pre-Instruction bar */}
          <p style={{margin:0, padding:0}}>Before</p>
          <div style={{ width: `${stat.pre}%`, background: linearGradients.redLinearGradient, transition: 'width 2s', padding:".25rem .5rem", borderRadius: ".4rem"}}>
            {stat.pre} %
          </div>
          {/* Post-Instruction bar */}
          <p style={{margin:0, padding:0}}>After</p>
          <div style={{ width: `${stat.post}%`, background: linearGradients.greenLinearGradient, transition: 'width 2s', marginBottom: 30, padding:".25rem .5rem", borderRadius: ".4rem" }}>
            {stat.post} %
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Stats;
