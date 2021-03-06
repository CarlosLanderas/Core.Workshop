
declare module MeetUp {

    interface Member {
        member_id: number;
        name: string;
    }

    interface MemberPhoto {
        highres_link: string;
        photo_link: string;
    }

    interface MeetupAssistant {
        member: Member;
        photo: MemberPhoto;
        response: string;
        group: string;
    }

    interface MeetupEvent {
        name: string,
        location: string,
        address: string;
        description: string
    }
}

