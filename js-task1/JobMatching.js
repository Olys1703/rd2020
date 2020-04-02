//#1
export function match(candidate, job) {
  if(typeof candidate.minSalary === 'undefined' || typeof job.maxSalary === 'undefined') {
  throw new Error
  }
  return (candidate.minSalary*.9)<=job.maxSalary 
}
//#2
export function match(job, candidates) {
  return candidates.filter(item=>(!item.desiresEquity || !!job.equityMax) &&
    [...item.desiredLocations, item.currentLocation].some(item=>job.locations.includes(item)))
}
//#3
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
