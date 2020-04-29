import axios from 'axios';

type Participants = string[];

interface IResponse {
  _links: {
    [key: string]: string;
  };
  chatters: {
    broadcaster: string[];
    vips: string[];
    moderators: string[];
    staff: string[];
    admins: string[];
    viewers: string[];
  };
}

class ChatterService {
  public async getViewers(): Promise<Participants> {
    this.response = await axios.get<IResponse>(
      'https://tmi.twitch.tv/group/user/lucas_montano/chatters',
    );

    const { viewers } = this.response.data.chatters;

    return viewers;
  }
}

export default new ChatterService();
