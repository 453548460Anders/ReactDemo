import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-image{
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    padding-right: 10px;
    line-height: 32px;
    margin-left: 18px;
    height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-bottom: 18px;
    .topic-pic{
        float: left;
        display: block;
        width: 32px;
        height: 32px;
        margin-right: 10px;

    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 10px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display:block;
        width: 150px;
        height: 100px;
        float: right;
        border-radius: 10px;
        vertical-align: middle;
        margin-top: 20px;
    }
`;

export const ListInfo = styled.div`
    width: 450px;
    float: left;
    .title{
        line-height: 20px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    margin-top: 5px;
    height: 50px;
    width: 280px;
    background: url(${(props)=> props.imgUrl});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    line-height: 300px;
    height: 330px;
    width: 278px;
    border-radius: 3px;
    //border: 1px solid #dcdcdc;
    text-align: center;
`;

export const WriterWrapperHeader = styled.div`
    overflow: hidden;
    height: 30px;
    line-height: 30px;
    width: 100%;
    .title{
        width: 100px;
        margin: 8px 0 2px 5px;
        height:20px;
        float: left
        line-height: 20px;
        font-size: 14px;
        color: #969696;
        text-align: left;
    }
`;

export const WriterWrapperItem = styled.div`
    overflow: hidden;
    width: 100%;
    height: 60px;
    .pic{
        display:block;
        margin: 6px 0 6px 5px;
        width: 48px;
        height: 48px;
        float: left;
        border-radius: 24px;
        vertical-align: middle;
    }
    
`;

export const WriterInfo = styled.div`
    width: 180px;
    float: left;
    .title{
        margin: 8px 0 2px 5px;
        height:20px;
        line-height: 20px;
        font-size: 13px;
        font-weight: 350;
        color: #333;
        text-align: left;
    }
    .desc{
        margin: 2px 0 5px 5px;
        height:20px;
        line-height: 20px;
        font-size: 9px;
        color: #999;
        text-align: left;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 85px;
    bottom: 85px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`