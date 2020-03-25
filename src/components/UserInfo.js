import React, { Component } from 'react'
import yuant from '../../content/images/profile.jpg'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={yuant} alt="yuant" />
            </div>
            <div>
              <p>
                I’m Yuant.
              </p>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
