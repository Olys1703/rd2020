export function match(candidate, job) {
  if(typeof candidate.minSalary === 'undefined' || typeof job.maxSalary === 'undefined') {
  throw new Error
  }
  return (candidate.minSalary*.9)<=job.maxSalary 
}

export function match(job, candidates) {
  return candidates.filter(item=>(!item.desiresEquity || !!job.equityMax) &&
    [...item.desiredLocations, item.currentLocation].some(item=>job.locations.includes(item)))
}

export function type(val) {
  if(typeof val === 'undefined'){return 'Undefined'}
  if(val === null){return 'Null'}
  const str = val.constructor.toString()
  let result = str.slice(9, str.indexOf('('))
  if(result === 'String'){
  return !isNaN(Number(val)) ? result + ' Numeric' : result
  }
  if(result === 'Number'){
    switch(true) {
      case isNaN(val):
      return result + ' NaN'
      case !isFinite(val):
      return result + ' Infinite'
      case Number.isInteger(val):
      return result + ' Integer'
      default: return result + ' Float'
    }
  }
  return result
}

export function match (candidate, job) {
  return job.skills.every(skill =>
    candidate.skills.every(candidateSkill => 
    candidateSkill.name !== skill.name || candidateSkill.preference !== 'avoid') && 
    candidate.skills.some(candidateSkill =>  
      skill.substitutions.map(s => s.name).concat(skill.name).indexOf(candidateSkill.name) !== -1 && 
      skill.idealYears <= candidateSkill.experience * (candidateSkill.preference === 'desired' ? 1.5 : 1)
    )
  )
}
