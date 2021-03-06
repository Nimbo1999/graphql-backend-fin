import { Repository } from 'typeorm';

import { IMetadata, Metadata } from '../../models/index.js';

import { IMetadataFactory } from '../../factories/metadata/IFactory.js';

import { IMetadataService } from './IService.js';

export default class MetadataService implements IMetadataService {
    private factory: IMetadataFactory;
    private repository: Repository<Metadata>;

    constructor(metadataFactory: IMetadataFactory, metadataRepository: Repository<Metadata>) {
        this.factory = metadataFactory;
        this.repository = metadataRepository;
    }

    generate(): IMetadata {
        const meta: IMetadata = this.factory.create();
        // const savedMeta = await this.repository.save(meta as Metadata);
        return meta;
    }

    async update(meta: IMetadata): Promise<IMetadata> {
        const updatedMetadata = this.factory.create();
        updatedMetadata.id = meta.id;
        updatedMetadata.createdAt = meta.createdAt;
        updatedMetadata.lastModifiedAt = new Date();
        return this.repository.save(updatedMetadata);
    }
}
