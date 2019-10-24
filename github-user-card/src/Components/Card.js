import React from 'react';

export default class Card extends React.Component {
    
    render() {
        return (
            <div>
                <div className="intro">
                    <img src={this.props.info.avatar_url} alt={this.props.info.name} />
                    <div className="names">
                        <h2>{this.props.info.name}</h2>
                        <h3>{this.props.info.login}</h3>
                        <p>{this.props.info.bio} </p>
                        <p>Public Repos: {this.props.info.public_repos} </p>
                        <p>Followers: {this.props.info.followers} </p>
                    </div>
                </div>
            </div>
        )
    }
}