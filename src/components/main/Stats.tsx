import React, { useEffect, useRef, useState } from "react";
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
  const [visible, setVisible] = useState(false)
  const statsContainerRef = useRef(null)

  useEffect(() => {
   
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting){
          setVisible(true)
          console.log("occurred on the screen")
        } else{
          setVisible(false)
        }
      })

      if(statsContainerRef.current){
        observer.observe(statsContainerRef.current)
      }

      return () => {
        if(statsContainerRef.current){
          observer.unobserve(statsContainerRef.current)
        }
      }
  })


  return (
  <div className={style.container} ref={statsContainerRef}>
    <h1 className={style.title}>The benefits of instructions</h1>
    {stats.map((stat, index) => (
      <div className={style.stats__container} key={index} >
        <div className={style.left__side}>
          <h3 style={{padding:0, margin:0}}>{stat.metric}</h3>
          <p style={{lineHeight:"30px"}}>{stat.description}</p>
        </div>

        <div className={style.right__side} style={{ display: 'flex', flexDirection:"column", gap: 15}}>
          {/* Pre-Instruction bar */}
          <div className={visible ? style.bar : ""} style={{ width: `${stat.pre}%`, background: linearGradients.redLinearGradient, transition: 'width 2s', padding:".25rem .5rem", borderRadius: ".4rem"}}>
            {stat.pre} %
          </div>
          {/* Post-Instruction bar */}
          
          <div className={visible ? style.bar : ""} style={{ width: `${stat.post}%`, background: linearGradients.greenLinearGradient, transition: 'width 2s', marginBottom: 30, padding:".25rem .5rem", borderRadius: ".4rem"}}>
            {stat.post} %
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Stats;
