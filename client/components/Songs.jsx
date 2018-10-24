import React from 'react'
import request from 'superagent'

class Songs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      relatedTopics: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit (e) {
    this.getDuck()
  }

  getDuck () {
    let search = this.state.search
    request
      .get(`https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/artist.search?page=1&page_size=5&q_artist=${search}&s_artist_rating=desc`)
      .set('X-Mashape-Key', 'BDv4zHh69OmshLlHrNpAZqaWVByQp1Sfi9fjsn4xReGw5x8HlE')
      .then(res => {
        const json = JSON.parse(res.text)
        this.setState({
          relatedTopics: json.RelatedTopics
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render () {
    return (
      <div className='Songs'>
        <h4>Songs</h4>
        <input value={this.state.search} onChange ={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
        {
          this.state.relatedTopics.map((topic, i) => {
            return <div key={i}><p>{topic.Text}</p></div>
          })
        }
      </div>
    )
  }
}

export default Songs
