import React from 'react'

export default function App(props) {
  return (
    <div>
      <div className="wrapper">
        <div className="box">
          <input type="text" placeholder="Escribe aqui tu estado" className="state-input box-row is-green input is-fullwidth" />
          <div className="box-row is-clipped">
            <button type="button" className="button is-green is-pulled-right">Publicar</button>
          </div>
        </div>

        <div className="stories">
          <div className="story box has-shadow">
            <div className="box-row">
              <div className="story-avatar">
                <figure><img src="img/profile.jpg" /></figure>
              </div>
              <div className="story-content">
                <div className="story-username">Juan Rodriguez</div>
                <div className="story-time">Hace 2 dias</div>
                <p className="story-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <ul className="story-actions"></ul>
              </div>
            </div>

            <div className="box-row">
              <div className="story-reactions">
                <div className="story-reactions-icon is-blue"></div>
                <div className="story-reactions-icon is-red"></div>
                <div className="story-reactions-icon is-yellow"></div>
                <div className="story-reactions-count">12</div>
                <div className="story-reactions-comments has-text-right">3 comentarios</div>
              </div>
            </div>

            <div className="box-row box-row-dark">
              <div className="story-comments">
                <ul className="story-comments-list">
                  <li className="story-comments-item"></li>
                </ul>

                <div className="story-comments-textarea"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}