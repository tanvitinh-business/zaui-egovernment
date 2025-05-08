import { Button } from "@components";
import FeedbackSection from "@components/feedback/FeedbackSection";
import PageLayout from "@components/layout/PageLayout";
import React, { useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Icon, useNavigate } from "zmp-ui";
import Background from "@assets/background.png";

const InfoContainer = styled(Box)`
    ${tw`bg-white flex items-center flex-col gap-4 `}
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
`;

const Title = styled.div`
    ${tw`text-[15px] text-[#767A7F]`}
`;

const FeedbackPage: React.FC = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const onSendFeedback = () => {
        navigate("/create-feedback");
    };

    return (
        <PageLayout title="Thông tin ghi chú" id="feedbacks" ref={pageRef}>
            <InfoContainer p={8} m={0}>
                <Title>Quý khách có thông tin cần ghi chú?</Title>

                <Button
                    onClick={onSendFeedback}
                    suffixIcon={<Icon icon="zi-chevron-right" />}
                >
                    Gửi ghi chú
                </Button>
            </InfoContainer>

            <FeedbackSection />
        </PageLayout>
    );
};

export default FeedbackPage;
