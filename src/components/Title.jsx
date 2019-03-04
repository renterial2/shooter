import React from 'react'
import { pathFromBezierCurve } from '../utils/formulas'

const Title = () => {
  const textStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 100,
    fill: '#cbca62',
  }

  const shooterLineCurve = {
    initialAxis: {
      x: -190,
      y: -950,
    },
    initialControlPoint: {
      x: 95,
      y: -50,
    },
    endingControlPoint: {
      x: 285,
      y: -50,
    },
    endingAxis: {
      x: 380,
      y: 0,
    },
  }

  return (
    <g filter="url(#shadow)">
      <defs>
        <path
          id="ShooterPath"
          d={pathFromBezierCurve(shooterLineCurve)}
        />
      </defs>
      <text {...textStyle}>
        <textPath xlinkHref="#ShooterPath">
          Shooter!
        </textPath>
      </text>
    </g>
  )
}

export default Title