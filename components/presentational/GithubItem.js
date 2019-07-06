import React from 'react';
import styled from 'styled-components';

const LOCATION_ICON = "https://cdn2.iconfinder.com/data/icons/navigation-location/512/Gps_locate_location_map_marker_navigate_navigation_pin_plan_road_route_travel_icon_-512.png";
const MAIL_ICON = "data:image/png;base64,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";

const ItemContainer = styled.div`
    border-top: 1px solid #8080808f;
`;

const ItemFlexContainer = styled(ItemContainer)`
    display: flex;
`;

const AvatarImage = styled.img`
    width: 50px;
    height: 50px;
`;

const ContentSection = styled.div`
    padding-left: 10px
`;

const HeaderSection = styled.div`
    padding-top: 10px;
    display: flex;
`;

const ItemTitle = styled.div`
    color: #3F51B5;
`;

const AnchorTitle = styled.a`
    text-decoration: none;
`;

const ItemSubtitle = styled.div`
    padding-left: 10px
`;

const DescriptionSection = styled.div`
    padding-top: 10px;
`;

const FooterSection = styled.div`
    padding-top: 10px;
    color: grey;
    display: flex;
`;

const VerticalAlign = styled.span`
    vertical-align: super;
`;

const FooterImage = styled(AvatarImage)`
    width: 20px;
    height: 20px;
`;

const GithubItem = (props) => {
    return (
    <ItemFlexContainer> 
        <div>
            <AvatarImage src={props.avatar_url} />
        </div>
        <ContentSection>
            <HeaderSection>
                <ItemTitle>
                    <AnchorTitle href={props.html_url} target="_blank">{props.login}</AnchorTitle>
                </ItemTitle>
                <ItemSubtitle>
                    {props.name || "Unavailable"}
                </ItemSubtitle>
            </HeaderSection>
            <DescriptionSection>
                {props.description || props.company || "Description not found"}
            </DescriptionSection>
            <FooterSection>
                <div>
                    <FooterImage src={LOCATION_ICON} />
                    <VerticalAlign>{props.location || "Location Not found"}</VerticalAlign>
                </div>
                <ContentSection>
                    <FooterImage src={MAIL_ICON} />
                    <VerticalAlign> {props.email || "Email Not found"} </VerticalAlign>
                </ContentSection>
            </FooterSection>
        </ContentSection>
    </ItemFlexContainer>
    );
}

export default GithubItem;