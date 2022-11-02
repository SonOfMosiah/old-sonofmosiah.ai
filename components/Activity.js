import { GitHubActivity } from '../data/activity'

export const Activity = () => {
  try {
    GitHubActivity.feed({ username: 'sonofmosiah', limit: 7, selector: '#gh-feed' })
  } catch (error) {
    console.log(error)
  }

  return (
    <div className="grid">
      <div id="gh-feed" />
    </div>
  )
}
