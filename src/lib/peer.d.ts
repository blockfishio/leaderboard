import { LambdasClient } from 'dcl-catalyst-client';
import { Profile } from '../modules/profile/types';
import { BaseAPI } from './api';
export declare class PeerAPI extends BaseAPI {
    cache: Record<string, Promise<Profile>>;
    lambdasClient: LambdasClient;
    constructor(url: string);
    fetchProfile: (address: string) => Promise<any>;
}
