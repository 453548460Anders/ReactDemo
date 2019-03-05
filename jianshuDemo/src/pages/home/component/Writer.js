import React, {PureComponent} from 'react';
import { WriterWrapper, WriterWrapperHeader, WriterWrapperItem, WriterInfo} from '../style';
import { connect } from 'react-redux';


class Writer extends PureComponent{
    render(){
        const { list } = this.props
        return(
            <WriterWrapper>
                <WriterWrapperHeader>
                    <h3 className="title">推荐作者</h3>
                </WriterWrapperHeader>
                {
                    list.map((item) => {
                        return(
                            <WriterWrapperItem key={item.get('id')}>
                                <img className="pic" src={item.get('imgUrl')} alt='' />
                                <WriterInfo>
                                    <h3 className="title">{item.get('writerName')}</h3>
                                    <p className="desc">{item.get('writerDesc')}</p>
                                </WriterInfo>
                            </WriterWrapperItem>
                        )
                    })
                }
                
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer);